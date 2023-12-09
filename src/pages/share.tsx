import { Box } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import QRCode from '@/components/QRCode';
import SecondaryButton from '@/components/SecondaryButton';
import useCardDataList from '@/hooks/useCardDataList';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Share.module.css';
import { CARD_TYPE } from '@/types/CardType';

export default function Detail() {
  const cardDatas = useCardDataList(CARD_TYPE.My);
  const { userId, loading } = useUser();
  const isSettingCard = cardDatas?.length === 0;

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

  if (!cardDatas)
    return (
      <main>
        <>
          <Header useMenuIcon />
          <h1>自分の名刺がありません</h1>
          <SecondaryButton text='自分の名刺を作成する' onClick={() => router.push('/make/mycard')} />
        </>
      </main>
    );

  const display = cardDatas.map((data) => {
    return <DisplayCard key={data.id} {...data} urlEnabled />;
  });

  return (
    <>
      <Head>
        <title>名刺交換画面 - Who!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.list}>
          <Header useMenuIcon />
          <div className={styles.qrcode}>
            <QRCode url={`${window.location.origin}/card/${cardDatas[0].id}`} />
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
