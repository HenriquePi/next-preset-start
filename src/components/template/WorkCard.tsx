"use client"

import useWindowSize from "@/utils/useWindowSize";
import React, { use, useEffect } from "react";

import styles from "./WorkCard.module.scss";

type Props = {
  cardTitle: string;
  company?: string;
  description: React.ReactNode;
  dateRange?: string;
  companyLink?: string;
  isExpanded?: boolean;
  light?: boolean;
};

export const WorkCard:React.FC<Props> = ({cardTitle, company, companyLink, description, dateRange, isExpanded = false, light = false}) => {
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
  const [isExpandable, setIsExpandable] = React.useState(true);
  const {width, height} = useWindowSize();

  useEffect(() => {
    if (isExpanded || width && width >  1024) {
      setIsExpandable(false);
      setIsDetailsOpen(true);
    } else if (!isExpanded && width && width < 1024) {
      setIsExpandable(true);
      setIsDetailsOpen(false);
    }
  }, [width, isExpanded]);

  return (
    <div className={ light ? styles.light + " " + styles.wrapper : styles.wrapper}>
      <div className={styles.title} style={{minHeight: isExpanded ? "57px" : "" }}>
        <h2>{cardTitle}</h2>
        {dateRange && <h4>{dateRange}</h4>}
      </div>
      {company && <h4><a href={companyLink} target="__blank" rel="noreferrer">{company}</a></h4>}
      <div style={{maxHeight: (isDetailsOpen || !isExpandable) ? "100%" : "10rem", overflow: "hidden"}} className={isExpandable ? styles.center : styles.fill}>
        {(!isDetailsOpen && isExpandable) && <div 
          className={styles.overlay}
        >
            <button
              onClick={() => setIsDetailsOpen(true)}
            >
              <h4>See Details</h4> 
            </button>
          </div>
        }
        {description}
      </div>
      {(isDetailsOpen && isExpandable) &&
        <button
          onClick={() => setIsDetailsOpen(false)}
        >
          <h4>Hide Details</h4> 
        </button>
      }
    </div>
  );
};