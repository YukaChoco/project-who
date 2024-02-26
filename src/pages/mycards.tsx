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
import SecondaryButton from '@/components/SecondaryButton';
import ShareButton from '@/components/ShareButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Mycards.module.css';
import { CardData } from '@/types/CardData';
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId';

export default function Index() {
  const [cardData, setCardDatas] = useState<CardData[] | null>([]);
  const { userId, loading } = useUser();
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

        <ShareButton />
      </main>
    </>
  );
}
