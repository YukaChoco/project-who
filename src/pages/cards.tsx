import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/AllCards.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import ShareButton from '@/conponents/ShareButton'
import useUser from '@/hooks/useUser'
import getHaveCardDetails from '@/utils/ok/getHaveCardDetails'
import type { CardData } from '@/types/CardData'


export default function Index() {
  const [cardDatas, setCardDatas] = useState<CardData[]>([]);

  const router = useRouter();
  const { userId, loading } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      if (userId) {
        const haveCardDetails = await getHaveCardDetails(userId);
        setCardDatas(haveCardDetails);
      }
    };
    fetchUsers();
  }, [userId])

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

  const display = cardDatas.map((data) => {
    return (
      <DisplayCard
        key={data.id}
        {...data}
        urlEnabled
        onClickHandler={() => router.push(`/card/${data.id}`)}
      />
    );
  })

  return (
    <>
      <Head>
        <title>Who!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header useMenuIcon />

        <div className={styles.cardlist}>
          {display}
        </div>

        <ShareButton id="68nUIBWcWlpw2sJV3wGh" />
      </main>
    </>
  )
}
