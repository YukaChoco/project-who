import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Mycards.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import NewCard from '@/conponents/NewCard'
import PrimaryButton from '@/conponents/PrimaryButton'
import router from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const data = {
    id: "id",
    name: "ゆうか",
    organization: "watnow",
    x: "chocolatbrown",
    instagram: "yuka__matcha",
    others: "https://my-portfolio-yukachoco.vercel.app",
    urlEnabled: true,
    textColor: "#A56A7F",
    bgColor: "#F4EBEF",
    onClickHandler: () => { },
  }
  return (
    <>
      <Head>
        <title>Who!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header useMenuIcon />

        <div className={styles.cardlist}>
          <DisplayCard
            {...data}
            onClickHandler={() => router.push("/make/card")}
          />
          <NewCard />
        </div>
        <PrimaryButton text={'ホームに戻る'} onClick={() => router.push("/cards")} />
      </main>
    </>
  )
}
