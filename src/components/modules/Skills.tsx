
import { WorkCard } from './../template/WorkCard';

import ReactLogo from "@/assets/icons/reactlogo.svg";
import TypeScriptLogo from "@/assets/icons/ts-logo-128.svg";
import NodeLogo from "@/assets/icons/nodejs-1-logo-svg-vector.svg";

import styles from "./Skills.module.scss";
import Image from 'next/image';
// maybe include timeline line, that fills as you scroll
export const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <div id="skills" className="anchor"/>
      <h1>Skills</h1>
      <div className={styles.cards}>
        {/* primary skills */}
        <WorkCard
          cardTitle="ReactJS"
          isExpanded
          description={
            <div className={styles.years}>
              <div className={styles.logo}>
                <Image 
                  src={ReactLogo}
                  alt="React Logo"
                  width={50}
                  height={50}
                />
              </div>
              <span/>
              <div>
              3
              </div>
              <span>years</span>
            </div>
          }
        />
        <WorkCard
          cardTitle="TypeScript"
          isExpanded
          description={
            <>
              <div className={styles.logo}>
                <Image
                  src={TypeScriptLogo}
                  alt="TypeScript Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.years}>
                <span/>
                <div>
                3
                </div>
                <span>years</span>
              </div>
            </>
          }
        />
        <WorkCard
          cardTitle="NodeJS"
          isExpanded
          description={
            <div className={styles.years}>
              <div className={styles.logo}>
                <Image
                  src={NodeLogo}
                  alt="Node Logo"
                  width={70}
                  height={50}
                />
              </div>
              <span/>
              <div>
              3
              </div>
              <span>years</span>
            </div>
          }
        />



        {/* secondary skills */}
        <div className={styles.microCards}>
          <WorkCard
            cardTitle="NextJS"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="GatsbyJS"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="Express"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="Sass"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
        </div>

        <div className={styles.microCards}>
          <WorkCard
            cardTitle="Git"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="Python"
            isExpanded
            description={
              <div className={styles.years}>
                1
              </div>
            }
          />
          <WorkCard
            cardTitle="Django"
            isExpanded
            description={
              <div className={styles.years}>
                1
              </div>
            }
          />
          <WorkCard
            cardTitle="React Native"
            isExpanded
            description={
              <div className={styles.years}>
                1
              </div>
            }
          />
        </div>
        <div className={styles.microCards}>
          <WorkCard
            cardTitle="Tailwind"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="Bulma"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="Bootstrap"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
          <WorkCard
            cardTitle="ZERB Foundation"
            isExpanded
            description={
              <div className={styles.years}>
                3
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};