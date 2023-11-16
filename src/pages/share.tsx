import { Box } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';
import DisplayCard from '@/conponents/Card';
import Header from '@/conponents/Header';
import PrimaryButton from '@/conponents/PrimaryButton';
import QRCode from '@/conponents/QRCode';
import SecondaryButton from '@/conponents/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Share.module.css';
import { CardData } from '@/types/CardData';
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId';

export default function Detail() {
  const [cardData, setCardDatas] = useState<CardData[] | null>([]);
  const { userId, loading } = useUser();
  useEffect(() => {
    const fetchUsers = async () => {
      if (userId) {
        const cardData = await getMyCardDetailsByUserId(userId);
        setCardDatas(cardData);
      }
    };
    fetchUsers();
  }, [userId]);

  if (loading) {
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
      <main>
        <>
          <Header useMenuIcon />
          <h1>自分の名刺がありません</h1>
          <SecondaryButton text='自分の名刺を作成する' onClick={() => router.push('/make/mycard')} />
        </>
      </main>
    );

  const display = cardData.map((data) => {
    return <DisplayCard key={data.id} {...data} urlEnabled />;
  });

  if (cardData[0]) {
    return (
      <>
        <Head>
          <title>名刺交換画面 - Who!</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={styles.main}>
          <div className={styles.list}>
            <Header useMenuIcon />
            <div className={styles.qrcode}>
              <QRCode url={`https://whooo.netlify.app/card/${cardData[0].id}`} />
            </div>
            <Box sx={{ width: '100%' }}>{display}</Box>
          </div>

          <div className={styles.returnbutton}>
            <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
          </div>
        </main>
      </>
    );
  }
}
