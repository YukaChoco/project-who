import { Box } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LineIcon,
} from 'react-share';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
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
  const [showPopup, setShowPopup] = useState(false);
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
          <Loading />
        </main>
      </>
    );
  }

  if (!userId)
    return (
      <main>
        <>
          <Header cardType='mycard' />
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
          <Header cardType='mycard' />
          <div className={styles.maintext}>あなたの名刺</div>
          <NewCard />
          <div className={styles.with_data}>
            <div className={styles.helper_text}>
              共有する名刺が存在しません！<br></br>
              名刺を作成してあなたの名刺を共有しましょう
            </div>
          </div>
          <div className={styles.returnHomeButton}>
            <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
          </div>
          <ShareButton />
        </main>
      </>
    );

  const display = <DisplayCard key={cardData[0].id} {...cardData[0]} urlEnabled link={'/edit/mycard?cardId=' + cardData[0].id} />;
  const handleShareButtonClick = () => {
    setShowPopup(true);
    // ここで実際のSNS共有処理を実装することもできます
    // 例えば、シェア用のAPIを呼び出すなど
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  if (!cardData) return;
  return (
    <>
      <Head>
        <title>自分の名刺 - Who!</title>
      </Head>
      <main className={styles.main}>
        <Header cardType='mycard' />

        <div className={styles.maintext}>あなたの名刺</div>
        <Box sx={{ width: '100%' }}>{display}</Box>

        <div className={styles.with_data}>
          <div className={styles.helper_text}>QRコードを読み込んで名刺を共有</div>
          <div className={styles.qrcode}>
            <QRCode url={`${window.location.origin}/card/${cardData[0].id}`} />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.button_container}>
            <PrimaryButton text={'名刺を編集する'} onClick={() => router.push('/edit/mycard?cardId=' + cardData[0].id)} />
            <SecondaryButton text={'SNSで名刺を共有する'} onClick={() => console.log('share')} />
          </div>
        </div>

        <div className={styles.returnHomeButton}>
          <SecondaryButton text={'名刺を共有する'} onClick={handleShareButtonClick} />
          {showPopup && (
            <div className='popup'>
              <div className='popup-content'>
                <span className='close' onClick={closePopup}>
                  &times;
                </span>
                <div>
                  <FacebookShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LineShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                    <LineIcon size={32} round />
                  </LineShareButton>
                  <EmailShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
