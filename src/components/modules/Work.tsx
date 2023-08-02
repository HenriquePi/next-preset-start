
import { WorkCard } from './../template/WorkCard';

import styles from "./Work.module.scss";
// maybe include timeline line, that fills as you scroll
export const Work = () => {


  return (
    <div className={styles.wrapper} >
      <div id="experience" className="anchor"/>
      <h1>Work History</h1>
      <div className={styles.cards}>
        <WorkCard
          cardTitle="Software Developer"
          company="Always August Digital"
          companyLink="https://alwaysaugust.co/"
          description={
            <div>
              <ul>
                <li>Implemented responsive ReactJS components following atomic design principles, using methodologies &
                  frameworks like CSS modules, BEM, Bootstrap, and Bulma</li>
                <li>Built a wiki using Web3/Solana NodeJS, MySQL and ExpressJS, while enforcing Blockchain validation before writing to a Strapi-based CMS & MySQL</li>
                <li>Expanded state management with Redux and context hooks, retrieved data with Axios and GraphQL,
                  ensuring persistent sessions and seamless UX</li>
                <li>Executed manual deployment/debugging of Python/Django back-end leveraging AWS and Docker, and automatic deployment of React front-ends leveraging Netlify, Vercel, and Gatsby Pages platforms</li>
                <li>
                  Lead the production and delivery of end-to-end solutions, freeing up stakeholders to focus on product/delivery/marketing
                </li>
              </ul>
            </div>
          }
          dateRange="November 2021 - July 2023"
        />
        <WorkCard
          cardTitle="Web Developer"
          company="Jupio Labs"
          companyLink="https://www.jupio.io/"
          description={
            <div>
              <ul>
                <li> Increase production efficiency by analysing design patterns and building a component library</li>
                <li> Improve site efficiency by developing in "mobile first" approach</li>
                <li>Utilized atomic design, BEM, and DRY principles to create clean and organized codebases ensuring
maintainability and future scalability</li>
              </ul>
            </div>
          }
          dateRange="November 2021 - July 2023"
        />
                <WorkCard
          cardTitle="Software Internship"
          company="Humming Payment Technologies"
          description={
            <div>
              <ul>
                <li> Converted product outlines into technical requirements and framework recommendations, distributed
details and tasks to developers and monitoring development ensuring features are release on time</li>
                <li>  Collaborated with development team to fix errors, increasing reliability of back-end services and timely
delivery</li>
                <li>Created modular and reusable components for use on a blog site streamlining production</li>
              </ul>
            </div>
          }
          dateRange="November 2021 - July 2023"
        />
      </div>
    </div>
  );
};