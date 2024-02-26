import { Box, Modal } from '@mui/material';
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
          <div className={styles.no_data}>
            <div className={styles.helper_text}>
              共有する名刺が存在しません！<br></br>
              名刺を作成してあなたの名刺を共有しましょう
            </div>
          </div>
          <div className={styles.button_container}>
            <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
          </div>
        </main>
      </>
    );

  const display = <DisplayCard key={cardData[0].id} {...cardData[0]} urlEnabled link={'/edit/mycard?cardId=' + cardData[0].id} />;
  const handleShareButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const modalStyle = {
    backgroundColor: 'white',
    width: '100vw',
    height: 'fit-content',
    position: 'fixed',
    bottom: 0,
    padding: '20px',
    paddingBottom: '40px',
    fontSize: '2rem',
    color: 'gray',
    fontWeight: 700,
    borderRadius: '20px 20px 0 0',
  };
  const snsContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };

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

        <div className={styles.button_container}>
          <PrimaryButton text={'名刺を編集する'} onClick={() => router.push('/edit/mycard?cardId=' + cardData[0].id)} />
          <SecondaryButton text={'SNSで名刺を共有する'} onClick={handleShareButtonClick} />
          <Modal open={showPopup} onClose={closePopup} aria-labelledby='parent-modal-title' aria-describedby='parent-modal-description'>
            <Box sx={modalStyle}>
              <div className='popup'>
                <div className='popup-content'>
                  <span className='close' onClick={closePopup}>
                    &times;
                  </span>
                  <Box sx={snsContainer}>
                    <FacebookShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                      <FacebookIcon size={64} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                      <TwitterIcon size={64} round />
                    </TwitterShareButton>
                    <LineShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                      <LineIcon size={64} round />
                    </LineShareButton>
                    <EmailShareButton url={`${window.location.origin}/card/${cardData[0].id}`}>
                      <EmailIcon size={64} round />
                    </EmailShareButton>
                  </Box>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </main>
    </>
  );
}
