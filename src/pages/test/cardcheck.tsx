import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DisplayCard from '@/conponents/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>HomePage</h1>
          <DisplayCard id={''} name={''} organization={''} x={''} instagram={''} others={''} urlEnabled={false} textColor={''} bgColor={''} onClickHandler={() => { }} />
        </div>
      </main>
    </>
  )
}
