import Head from 'next/head';
import router from 'next/router';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import NewCard from '@/components/NewCard';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import ShareButton from '@/components/ShareButton';
import useCardDataList from '@/hooks/useCardDataList';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Mycards.module.css';
import { CARD_TYPE } from '@/types/CardType';

export default function Index() {
  const cardDatas = useCardDataList(CARD_TYPE.My);
  const { userId, loading } = useUser();

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
        <Header useMenuIcon />
        <div className={styles.cardlist}>
          {cardDatas &&
            cardDatas.map((data) => {
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
