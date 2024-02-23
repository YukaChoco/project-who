import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import SecondaryButton from '@/components/SecondaryButton';
import ShareButton from '@/components/ShareButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/AllCards.module.css';
import type { CardData } from '@/types/CardData';
import getHaveCardDetailsByUserId from '@/utils/ok/getHaveCardDetailsByUserId';

export default function Index() {
  const [cardDatas, setCardDatas] = useState<CardData[] | null>([]);

  const router = useRouter();

  const { userId, loading } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      if (userId) {
        const haveCardDetails = await getHaveCardDetailsByUserId(userId);
        setCardDatas(haveCardDetails);
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
          <Loading />
        </main>
      </>
    );
  }

  if (!userId) {
    return (
      <main>
        <>
          <Header />
          <h1>ログインされていません</h1>
          <SecondaryButton text='ログイン画面へ' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
        </>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>名刺一覧 - Who!</title>
      </Head>

      <main>
        <Header useMenuIcon />
        {cardDatas ? (
          // 名刺が存在する時
          <div className={styles.cardlist}>
            {cardDatas.map((data) => {
              return <DisplayCard urlEnabled={false} key={data.id} {...data} link={`/card/${data.id}`} />;
            })}
          </div>
        ) : (
          // 名刺が存在しない時
          <h1>登録された名刺がありません</h1>
        )}

        <ShareButton />
      </main>
    </>
  );
}
