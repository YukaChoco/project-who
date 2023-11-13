import Head from 'next/head'
import styles from '@/styles/Mycards.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import NewCard from '@/conponents/NewCard'
import PrimaryButton from '@/conponents/PrimaryButton'
import router from 'next/router'
import { useEffect, useState } from 'react'
import { CardData } from '@/types/CardData'
import useUser from '@/hooks/useUser'
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId'
import SecondaryButton from '@/conponents/SecondaryButton'

export default function Index() {
  const [cardData, setCardDatas] = useState<CardData[] | null>([])
  const { userId, loading } = useUser()
  useEffect(() => {
    const fetchUsers = async () => {
      if (userId) {
        const cardData = await getMyCardDetailsByUserId(userId)
        setCardDatas(cardData)
      }
    }
    fetchUsers()
  }, [userId])

  if (loading) {
    return (
      <>
        <Head>
          <title>Who!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    )
  }

  if (!userId) {
    return (
      <main>
        <>
          <h1>ログインされていません</h1>
          <SecondaryButton
            text="ログインしてください"
            onClick={() => router.push(`/?nextPage=${router.asPath}`)}
          />
        </>
      </main>
    )
  }

  if (!cardData) {
    return (
      <main>
        <>
          <h1>自分の名刺がありません</h1>
          <SecondaryButton
            text="自分の名刺を作成する"
            onClick={() => router.push('/make/mycard')}
          />
          <NewCard />
          <PrimaryButton text={'ホームに戻る'} onClick={() => router.push("/cards")} />
        </>
      </main>
    )
  }

  const display = cardData.map((data) => {
    return <DisplayCard key={data.id} {...data} urlEnabled onClickHandler={() => router.push("/make/card")} />
  })


  if (cardData[0]) {
    return (
      <>
        <Head>
          <title>Who!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Header useMenuIcon />
          <div className={styles.cardlist}>
            {display}
          </div>
          <NewCard />

          <PrimaryButton text={'ホームに戻る'} onClick={() => router.push("/cards")} />
        </main>
      </>
    )
  }
}

