import { register } from 'swiper/element/bundle';
import { ProjectSwiper } from '../template/ProjectSwiper';

import styles from "./Projects.module.scss";


export const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <div id="projects" className="anchor"/>
      <h1>Projects</h1>
      <div>
        <ProjectSwiper />
      </div>
    </div>
  );
};