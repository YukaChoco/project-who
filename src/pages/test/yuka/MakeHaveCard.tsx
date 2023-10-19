import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/AllCards.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import router from 'next/router'
import { CardData } from '@/types/CardData'
import ShareButton from '@/conponents/ShareButton'
import { useRouter } from 'next/router'
import Card from '@/conponents/Card'
import DisplayText from '@/conponents/DisplayText'
import useUser from '@/hooks/useUser'
import getHaveCardDetails from '@/utils/ok/getHaveCardDetails'
import makeHaveCard from '@/utils/ok/makeHaveCard'


export default function Index() {
  const [cardDatas, setCardDatas] = useState<CardData[]>([]);

  const router = useRouter();
  const { userId, loading } = useUser();


  if (loading) {
    <>
      <Head>
        <title>Who!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Loading...</h1>
      </main>
    </>
  }


  if (!userId) return;
  return (
    <>
      <Head>
        <title>Who!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header useMenuIcon />

        <button onClick={() => makeHaveCard(userId,
          {
            name: "まこ",
            organization: "立命館大学",
            x: "twitter test",
            instagram: "insta test",
            others: "",
          })}>
          add
        </button>

        <ShareButton id="68nUIBWcWlpw2sJV3wGh" />
      </main >
    </>
  )
}
