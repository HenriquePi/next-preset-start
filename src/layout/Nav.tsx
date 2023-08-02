
import styles from './Nav.module.scss'

export const Nav = () => {
  return (
    <nav
      className={styles.wrapper}
    >
      <div className={styles.bar}>
        <a href="#skills">
          Skills
        </a>
        <a href="#experience">
          Experience
        </a>
        <a href="#projects">
          Projects
        </a>
        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};