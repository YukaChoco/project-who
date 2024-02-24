import { Box } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import NewCard from '@/components/NewCard';
import PrimaryButton from '@/components/PrimaryButton';
import QRCode from '@/components/QRCode';
import SecondaryButton from '@/components/SecondaryButton';
import ShareButton from '@/components/ShareButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Mycards.module.css';
import { CardData } from '@/types/CardData';
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId';

export default function Detail() {
  const [cardData, setCardDatas] = useState<CardData[] | null>([]);
  const { userId, loading } = useUser();
  const isSettingCard = cardData?.length === 0;
  useEffect(() => {
    const fetchCards = async () => {
      if (userId) {
        const cardData = await getMyCardDetailsByUserId(userId);
        setCardDatas(cardData);
      }
    };
    fetchCards();
  }, [userId]);

  if (loading || isSettingCard) {
    return (
      <>
        <Head>
          <title>Who!</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  if (!userId)
    return (
      <main>
        <>
          <Header useMenuIcon />
          <h1>ログインされていません</h1>
          <SecondaryButton text='ログイン画面へ' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
        </>
      </main>
    );

  if (!cardData)
    return (
      <>
        <Head>
          <title>自分の名刺 - Who!</title>
        </Head>
        <main className={styles.main}>
          <Header useMenuIcon />
          <div className={styles.maintext}>あなたの名刺</div>
          <NewCard />
          <div className={styles.maintext1}>
            共有する名刺が存在しません！<br></br>
            名刺を作成してあなたの名刺を共有しましょう
          </div>
          <div className={styles.returnHomeButton}>
            <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
          </div>
          <ShareButton />
        </main>
      </>
    );

  const display = <DisplayCard key={cardData[0].id} {...cardData[0]} urlEnabled />;

  return (
    <>
      <Head>
        <title>自分の名刺 - Who!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.cardlist}>
          <Header useMenuIcon />
          <div className={styles.maintext}>あなたの名刺</div>
          <Box sx={{ width: '100%' }}>{display}</Box>
          <div className={styles.maintext1}>QRコードを読み込んで名刺を共有</div>
          <div className={styles.qrcode}>
            <QRCode url={`${window.location.origin}/card/${cardData[0].id}`} />
          </div>
        </div>
        <div className={styles.returnbutton}>
          <PrimaryButton text={'名刺の詳細へ'} onClick={() => router.push('/card/' + cardData[0].id)} />
        </div>
        <div className={styles.returnbutton}>
          <PrimaryButton text={'名刺を編集する'} onClick={() => router.push('/edit/mycard?cardId=' + cardData[0].id)} />
        </div>
        <ShareButton />
      </main>
    </>
  );
}
