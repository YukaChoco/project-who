import { useState, useEffect } from 'react'
import Head from 'next/head'
import { onAuthStateChanged } from "firebase/auth";
import styles from '@/styles/upgrade.module.css'
import Header from '@/conponents/Header'
import type { CardData } from '@/types/CardData'
import { auth } from '@/firebase';
import getHaveCardDetails from '@/utils/ok/getHaveCardDetails';


export default function GetHaveCardDetailsTest() {
  const [cardDatas, setCardDatas] = useState<CardData[]>([])
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const haveCardDetails = await getHaveCardDetails(uid);
        setCardDatas(haveCardDetails)
      } else {
        console.log('not user')
      }
    });
  }, [count])


  const handle = () => {
    setCount(count + 1);
  }

  console.log(cardDatas)

  const show = cardDatas.map((card, index) => <h1 key={index}>{card.name}</h1>);

  return (
    <>
      <Head>
        <title>Who!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div>space</div>
        <div>space</div>
        <div>space</div>
        <div>space</div>
        <div>
          {show}
        </div>
      </main>
    </>
  )

}
