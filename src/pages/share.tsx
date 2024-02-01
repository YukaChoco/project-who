import { Box } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import QRCode from '@/components/QRCode';
import SecondaryButton from '@/components/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Share.module.css';
import { CardData } from '@/types/CardData';
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId';

export default function Detail() {
  const router = useRouter();
  const [cardData, setCardDatas] = useState<CardData[] | null>([]);
  const [shareCardID, setShareCardID] = useState<string | null>(null);
  const { userId, loading: userLoading } = useUser();
  const [shareLoading, setShareLoading] = useState<boolean>(true);
  const loading = userLoading || shareLoading;
  const selecting = shareCardID === null;

  useEffect(() => {
    const fetchCards = async () => {
      if (userId) {
        const cardData = await getMyCardDetailsByUserId(userId);
        setCardDatas(cardData);
      }
    };
    const queryCardID = (router.query.initialCardID as string) || null;
    setShareCardID(queryCardID);
    setShareLoading(false);
    fetchCards();
  }, [router.query.initialCardID, userId]);

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
        <Header useMenuIcon />
        <h1>ログインされていません</h1>
        <SecondaryButton text='ログイン画面へ' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
      </main>
    );

  if (!cardData)
    return (
      <main>
        <Header useMenuIcon />
        <h1>自分の名刺がありません</h1>
        <SecondaryButton text='自分の名刺を作成する' onClick={() => router.push('/make/mycard')} />
      </main>
    );

  // const handleOnClick = (selectId: string) => {
  //   // selectedIDをshareCardIDに変更
  // };

  const display = cardData.map((data) => {
    return (
      <div className={styles.card} key={data.id}>
        <DisplayCard
          {...data}
          onClickHandler={() => {
            // handleOnClick(data.id);
          }}
          urlEnabled={false}
        />
      </div>
    );
  });

  if (selecting) {
    return (
      <>
        <Head>
          <title>名刺交換画面 - Who!</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.container}>
            <Header useMenuIcon />

            <Box sx={{ width: '100%' }}>{display}</Box>
          </div>

          <div className={styles.returnbutton}>
            <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>名刺交換画面 - Who!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.list}>
          <Header useMenuIcon />
          <div className={styles.qrcode}>
            <QRCode url={`${window.location.origin}/card/${shareCardID}`} />
          </div>
          <Box sx={{ width: '100%' }}>{display}</Box>
        </div>

        <div className={styles.returnbutton}>
          {/* 
            SecondaryButton押したらshareCardID === nullに変更(router.pushでのリンク移動無し)
          */}
          <SecondaryButton text='共有する名刺を変更' onClick={() => router.push('/share/selecting')} />
          <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
        </div>
      </main>
    </>
  );
}
