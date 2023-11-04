import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import styles from '@/styles/CardDetail.module.css'
import { Typography } from '@mui/material'
import Header from '@/conponents/Header'
import Card from '@/conponents/Card'
import DisplayText from '@/conponents/DisplayText'
import SecondaryButton from '@/conponents/SecondaryButton'
import ShareButton from '@/conponents/ShareButton'
import type { CardData } from '@/types/CardData'
import getCardDetils from '@/utils/ok/getCardDetils'
import { getURL } from '@/utils/ok/getURL'
import addHaveCardId from '@/utils/ok/addHaveCardId'

export default function Index() {
  const router = useRouter();
  const cardid = router.query.cardid as string;

  const [cardData, setCardData] = useState<CardData | null>(null);
  const [registerLoading, setRegistertLoading] = useState<boolean>(false);

  const { userId, loading } = useUser();

  const isLoginUser = userId !== null;

  useEffect(() => {
    const fetchUsers = async () => {
      if (userId && cardid) {
        const cardData = await getCardDetils(cardid);
        setCardData(cardData);
      }
    };
    fetchUsers();
  }, [cardid, userId])

  const handleRegisterButton = async () => {
    if (userId) {
      setRegistertLoading(true);
      console.log(cardid)
      const result = await addHaveCardId(userId, cardid);
      if (result) {
        console.log('登録しました');
      }
      else {
        console.error('登録に失敗しました');
      }
    } else {
      console.error('ログインユーザーではありません');
    }
  }

  if (loading || registerLoading) {
    <>
      <main>
        <h1>Loading...</h1>
      </main>
    </>
  }

  if (cardData) {
    return (
      <>
        <Head>
          <title>{cardData.name}さんの名刺-Who!</title>
        </Head>

        <main>
          <Header useSearchIcon useMenuIcon />

          <div className={styles.container}>
            <Card {...cardData} urlEnabled />
          </div>

          <div className={styles.container}>
            <div className={styles.infoitem}>
              <DisplayText title="氏名" detail={cardData.name} />
            </div>
            <div className={styles.infoitem}>
              <DisplayText title="orgnization" detail={cardData.organization} />
              <DisplayText title="X" detail={cardData.x} url={getURL("x", cardData.x)} isSNSId />
              <DisplayText title="Instagram" detail={cardData.instagram} url={getURL("instagram", cardData.instagram)} isSNSId />
            </div>
          </div>

          <div className={styles.container}>
            <SecondaryButton text='この名刺を登録する' onClick={handleRegisterButton} disabled={!isLoginUser} />
            {!isLoginUser && (
              <>
                <SecondaryButton text='ログインする' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
                <Typography sx={{ textAlign: 'center' }}>※名刺の登録にはログインが必要です</Typography>
              </>
            )}
          </div>

          <ShareButton id="68nUIBWcWlpw2sJV3wGh" />
        </main>
      </>
    )
  }
}
