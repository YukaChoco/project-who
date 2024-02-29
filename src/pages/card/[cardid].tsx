import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import DeleteButton from '@/components/DeleteButton';
import DisplayText from '@/components/DisplayText';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/CardDetail.module.css';
import type { CardData } from '@/types/CardData';
import { CARD_TYPE, CardType } from '@/types/CardType';
import addHaveCardId from '@/utils/ok/addHaveCardId';
import deleteCardByCardId from '@/utils/ok/deleteCardByCardId';
import deleteCardIdByCardId from '@/utils/ok/deleteCardIdByCardId';
import getCardDetils from '@/utils/ok/getCardDetails';
import getCardType from '@/utils/ok/getCardType';
import { toXProfileURL, toInstagramProfileURL } from '@/utils/ok/toSNSProfileURL';

export default function Index() {
  const router = useRouter();
  const cardId = router.query.cardid as string;

  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.None);
  const [isFirebaseLoading, setFirebaseLoading] = useState<boolean>(false);

  const { userId, loading } = useUser();

  useEffect(() => {
    setFirebaseLoading(true);
    const fetchCardDetails = async () => {
      if (cardId) {
        const fetchCardData = await getCardDetils(cardId);
        setCardData(fetchCardData);
        if (userId) {
          const fetchCardType = await getCardType(userId, cardId);
          setCardType(fetchCardType);
        }
      }
      setFirebaseLoading(false);
    };
    if (!loading) {
      fetchCardDetails();
    }
  }, [cardId, loading, userId]);

  const handleRegisterButton = async () => {
    if (userId) {
      const result = await addHaveCardId(userId, cardId);
      if (result) {
        setCardType(CARD_TYPE.My);
      } else {
        console.error('登録に失敗しました');
      }
    } else {
      console.error('ログインユーザーではありません');
    }
  };

  const showButtons = () => {
    if (userId) {
      if (cardData?.authorId === userId) {
        // 名刺作成者
        return (
          <>
            <PrimaryButton text='編集する' onClick={() => router.push(`/edit/${cardType}?cardId=${cardId}`)} />
            {cardType === CARD_TYPE.My && <SecondaryButton text='共有する' onClick={() => router.push('/mycards')} />}
            <DeleteButton
              text='削除する'
              onClick={async () => {
                if (window.confirm('この名刺を完全に削除してもよろしいですか?')) {
                  await deleteCardByCardId(userId, cardId, cardType);
                  router.push(`/${cardType}s`);
                }
              }}
            />
          </>
        );
      } else if (cardType === CARD_TYPE.Have) {
        // カード登録済みのユーザ
        return (
          <>
            <SecondaryButton text='登録済み' disabled />
            <DeleteButton
              text='未登録に戻す'
              onClick={async () => {
                if (window.confirm('この名刺を削除してもよろしいですか?')) {
                  await deleteCardIdByCardId(userId, cardId, CARD_TYPE.Have);
                  router.push(`/cards`);
                }
              }}
            />
          </>
        );
      }
      // その他のログインユーザ
      return (
        <SecondaryButton
          text='この名刺を登録する'
          onClick={async () => {
            setFirebaseLoading(true);
            await handleRegisterButton();
            window.location.reload();
          }}
        />
      );
    }
    return (
      //非ログインユーザ
      <>
        <SecondaryButton text='登録する' onClick={handleRegisterButton} disabled />
        <Box>
          <SecondaryButton text='ログインする' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
          <Typography sx={{ textAlign: 'center' }}>※名刺の登録にはログインが必要です</Typography>
        </Box>
      </>
    );
  };

  if (loading || isFirebaseLoading || cardId === undefined) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (cardData) {
    if (cardData.protected && cardData.authorId !== userId) {
      return (
        <main className='error'>
          <Header cardType={CARD_TYPE.None} />
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

        <main className={styles.wrapper}>
          <Header cardType={CARD_TYPE.None} />

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

          <div className={styles.space} />

          <div className={styles.button_container}>{showButtons()}</div>
        </main>
      </>
    );
  } else {
    return (
      <main className='error'>
        <Header cardType={CARD_TYPE.None} />
        <h1>存在しない名刺です</h1>
      </main>
    );
  }
}
