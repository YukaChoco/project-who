import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import DisplayText from '@/conponents/DisplayText'
import { Details } from '@/types/Details'

const inter = Inter({ subsets: ['latin'] })


export default function TestDisplay() {
  const datas: Details = [
    {
      title: "title1",
      detail: "details1"
    },
    {
      title: "title2",
      detail: "details2"
    },
    {
      title: "title3",
      detail: "details3"
    },
  ]

  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Test</h1>
          <DisplayText title="title" detail="detail" />
        </div>
      </main>
    </>
  )
}
