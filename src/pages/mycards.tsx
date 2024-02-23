import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import NewCard from '@/components/NewCard';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import ShareButton from '@/components/ShareButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Mycards.module.css';
import { CardData } from '@/types/CardData';
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId';

export default function Index() {
  const [cardData, setCardDatas] = useState<CardData[] | null>([]);
  const { userId, loading } = useUser();
  useEffect(() => {
    const fetchCards = async () => {
      if (userId) {
        const cardData = await getMyCardDetailsByUserId(userId);
        setCardDatas(cardData);
      }
    };
    fetchCards();
  }, [userId]);

  if (loading) {
    return (
      <>
        <Head>
          <title>Who!</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <Loading />
        </main>
      </>
    );
  }

  if (!userId) {
    return (
      <main>
        <>
          <Head>
            <title>自分の名刺 - Who!</title>
          </Head>
          <h1>ログインされていません</h1>
          <SecondaryButton text='ログインしてください' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
        </>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>自分の名刺 - Who!</title>
      </Head>
      <main className={styles.main}>
        <Header cardType='mycard' />
        <div className={styles.cardlist}>
          {cardData &&
            cardData.map((data) => {
              return <DisplayCard key={data.id} {...data} urlEnabled={false} link={`/card/${data.id}`} />;
            })}
        </div>
        <NewCard />

        <div className={styles.returnHomeButton}>
          <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
        </div>

        <ShareButton />
      </main>
    </>
  );
}
