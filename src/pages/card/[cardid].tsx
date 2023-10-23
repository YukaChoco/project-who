import Head from 'next/head'
import { useEffect, useState } from 'react'
import useUser from '@/hooks/useUser'
import styles from '@/styles/Card-detail.module.css'
import { useRouter } from 'next/router'
import Header from '@/conponents/Header'
import Card from '@/conponents/Card'
import DisplayText from '@/conponents/DisplayText'
import ShareButton from '@/conponents/ShareButton'
import type { CardData } from '@/types/CardData'
import getCardData from '@/utils/ok/getCardData'
import { getURL } from '@/utils/ok/getURL'

export default function Index() {
  const router = useRouter();
  const cardid = router.query.cardid as string;

  const [cardData, setCardData] = useState<CardData | null>(null);

  const { userId, loading } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      if (userId && cardid) {
        const cardData = await getCardData(cardid);
        console.log(cardData)
        setCardData(cardData);
      }
    };
    fetchUsers();
  }, [cardid, userId])

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

  if (cardData) {
    return (
      <>
        <Head>
          <title>Who!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header useSearchIcon useMenuIcon />

          <div className={styles.card}>
            <Card {...cardData} urlEnabled />
          </div>

          <div>
            <div className={styles.infoitem}>
              <DisplayText title="氏名" detail={cardData.name} />
            </div>
            <div className={styles.infoitem}>
              <DisplayText title="orgnization" detail={cardData.organization} />
              <DisplayText title="X" detail={cardData.x} url={getURL("x", cardData.x)} isSNSId />
              <DisplayText title="Instagram" detail={cardData.instagram} url={getURL("instagram", cardData.instagram)} isSNSId />
            </div>
          </div>
          <ShareButton id="68nUIBWcWlpw2sJV3wGh" />
        </main>
      </>
    )
  }
}
