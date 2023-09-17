import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/TestKotaro.module.css'
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
        <DisplayText title="氏名" detail="小林虎太郎" />
        <DisplayText title="氏名" detail="小林虎太郎" />
      </main>
    </>
  )
}
