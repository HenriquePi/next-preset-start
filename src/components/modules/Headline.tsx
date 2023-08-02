import Image from "next/image";

import Headshot from "@/assets/ProfessionalPicComped.webp";

import styles from "./Headline.module.scss";

export const Headline = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={Headshot}
          alt="Henrique Pinto"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <h1>Fullstack Web Developer</h1>
        <div className={styles.quote}>
          &ldquo;
          I am a talented and ambitious developer, with a passion for learning and a desire to create.
          &rdquo;
        </div>
      </div>
    </div>
  );
};