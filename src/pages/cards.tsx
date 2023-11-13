import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/AllCards.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import ShareButton from '@/conponents/ShareButton'
import useUser from '@/hooks/useUser'
import getHaveCardDetailsByUserId from '@/utils/ok/getHaveCardDetailsByUserId'
import type { CardData } from '@/types/CardData'
import SecondaryButton from '@/conponents/SecondaryButton'

export default function Index() {
  const [cardDatas, setCardDatas] = useState<CardData[] | null>([]);

  const router = useRouter();

  const { userId, loading } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      if (userId) {
        const haveCardDetails = await getHaveCardDetailsByUserId(userId);
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


  if (!userId)
    return (
      <main>
        <>
        <Header useMenuIcon />
          <h1>ログインされていません</h1>
          <SecondaryButton
            text="ログイン画面へ"
            onClick={() => router.push(`/?nextPage=${router.asPath}`)}
          />
        </>
      </main>
    ) //cardDataがnullの時のエラー処理

    if (!cardDatas)
    return (
      <main>
        <>
        <Header useMenuIcon />
          <h1>自分の名刺がありません</h1>
          
          <SecondaryButton
            text="自分の名刺を作成する"
            onClick={() => router.push('/make/mycard')}
          />
        </>
      </main>
    ) //cardDataがnullの時のエラー処理

  const display = cardDatas.map((data) => {
    return (
      <DisplayCard
        key={data.id}
        {...data}
        urlEnabled
        link={`/card/${data.id}`}
      />
    );
  })

  


  return (
    <>
      <Head>
        <title>名刺一覧 - Who!</title>
      </Head>

      <main>
        <Header useMenuIcon />

        <div className={styles.cardlist}>
          {display}
        </div>

        <ShareButton />
      </main>
    </>
  )
}
