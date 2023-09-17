import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NameCard from '@/conponents/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>HomePage</h1>
          <NameCard/>
        </div>
      </main>
    </>
  )
}
