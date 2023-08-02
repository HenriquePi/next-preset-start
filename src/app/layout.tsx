import './globals.scss'
import type { Metadata } from 'next'
import { Nav } from '@/layout/Nav'
import { Footer } from '@/layout/Footer'

import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Henrique Pinto Software Developer',
  description: 'Details about software development candidate Henrique Pinto. Specializes in React frameworks and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.wrapper}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
