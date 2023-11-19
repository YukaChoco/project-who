import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import DisplayText from '@/components/DisplayText';
import Header from '@/components/Header';
import SecondaryButton from '@/components/SecondaryButton';
import ShareButton from '@/components/ShareButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/CardDetail.module.css';
import type { CardData } from '@/types/CardData';
import { CARD_TYPE, CardType } from '@/types/CardType';
import addHaveCardId from '@/utils/ok/addHaveCardId';
import getCardDetils from '@/utils/ok/getCardDetils';
import getCardType from '@/utils/ok/getCardType';
import { toXProfileURL, toInstagramProfileURL } from '@/utils/ok/toSNSProfileURL';

export default function Index() {
  const router = useRouter();
  const cardId = router.query.cardid as string;

  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.None);
  const [isRegisterLoading, setRegistertLoading] = useState<boolean>(false);

  const { userId, loading } = useUser();

  const isLoginUser = userId !== null;

  useEffect(() => {
    const fetchCardDetails = async () => {
      if (cardId) {
        const fetchCardData = await getCardDetils(cardId);
        setCardData(fetchCardData);
        if (userId) {
          const fetchCardType = await getCardType(userId, cardId);
          setCardType(fetchCardType);
        }
        //loading false
      }
    };
    fetchCardDetails();
  }, [cardId, userId]);

  const handleRegisterButton = async () => {
    if (userId) {
      setRegistertLoading(true);
      const result = await addHaveCardId(userId, cardId);
      if (result) {
        setCardType(CARD_TYPE.My);
        setRegistertLoading(false);
      } else {
        setRegistertLoading(false);
        console.error('登録に失敗しました');
      }
    } else {
      console.error('ログインユーザーではありません');
    }
  };

  const showButtons = () => {
    if (cardData?.authorId === userId) {
      // 名刺作成者
      return <SecondaryButton text='この名刺を編集する' onClick={() => router.push(`/edit/${cardType}?cardId=${cardId}`)} />;
    } else if (cardType === CARD_TYPE.Have) {
      // カード登録済みのユーザ
      return <SecondaryButton text='登録済み' disabled />;
    } else if (isLoginUser) {
      //ログインユーザ
      return <SecondaryButton text='この名刺を登録する' onClick={handleRegisterButton} />;
    }
    return (
      //非ログインユーザ
      <>
        <Box sx={{ margin: '15px 0px' }}>
          <SecondaryButton text='この名刺を登録する' onClick={handleRegisterButton} disabled />
        </Box>
        <Box sx={{ margin: '15px 0px' }}>
          <SecondaryButton text='ログインする' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
          <Typography sx={{ textAlign: 'center' }}>※名刺の登録にはログインが必要です</Typography>
        </Box>
      </>
    );
  };

  if (loading || isRegisterLoading) {
    return (
      <>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  if (cardData) {
    if (cardData.protected && cardData.authorId !== userId) {
      return (
        <main className='error'>
          <Header useSearchIcon useMenuIcon />
          <div>
            <h1>この名刺は閲覧できません</h1>
            <p>※この名刺は本人が作成した名刺ではないため、作成者しか閲覧できません。</p>
          </div>
        </main>
      );
    }
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
              <DisplayText title='氏名' detail={cardData.name} />
            </div>
            <div className={styles.infoitem}>
              <DisplayText title='orgnization' detail={cardData.organization} />
              <DisplayText title='X' detail={cardData.x} url={toXProfileURL(cardData.x)} isSNSId />
              <DisplayText title='Instagram' detail={cardData.instagram} url={toInstagramProfileURL(cardData.instagram)} isSNSId />
            </div>
          </div>

          <div className={styles.container}>{showButtons()}</div>

          <ShareButton />
        </main>
      </>
    );
  } else {
    return (
      <main className='error'>
        <Header useSearchIcon useMenuIcon />
        <h1>存在しない名刺です</h1>
      </main>
    );
  }
}
