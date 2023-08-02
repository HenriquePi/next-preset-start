import { Contact } from '@/components/modules/Contact'
import { Headline } from '@/components/modules/Headline'
import { PersonalProjects } from '@/components/modules/PersonalProjects'
import { Projects } from '@/components/modules/Projects'
import { Skills } from '@/components/modules/Skills'
import { Work } from '@/components/modules/Work'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
   <div className={styles.wrapper}>
      <Headline />
      <Skills />
      <Work />
      <Projects />
      {/* <PersonalProjects /> */}
      {/* <Contact /> */}
   </div>
  )
}
