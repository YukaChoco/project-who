import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, SetStateAction } from 'react';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import PageTopBackButton from '@/components/PageTopBackButton';
import SearchBar from '@/components/SearchBar';
import SecondaryButton from '@/components/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/AllCards.module.css';
import type { CardData } from '@/types/CardData';
import getHaveCardDetailsByUserId from '@/utils/ok/getHaveCardDetailsByUserId';

export default function Index() {
  const [cardDatas, setCardDatas] = useState<CardData[] | null>(null);
  const [exampleCardDatas, setExampleCardDatas] = useState<CardData[] | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  const router = useRouter();

  const { userId, loading } = useUser();

  const [inputText, setInputText] = useState<string>('');
  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    const fetchCards = async () => {
      setFetching(true);
      if (userId) {
        const haveCardDetails = await getHaveCardDetailsByUserId(userId);
        if (haveCardDetails) {
          setCardDatas([...haveCardDetails]);
        }
      }
      const exampleCardDetails = await getHaveCardDetailsByUserId('exampleDocument');
      if (exampleCardDetails) {
        setExampleCardDatas([...exampleCardDetails]);
      }
      setFetching(false);
    };
    if (!loading) {
      fetchCards();
    }
  }, [loading, userId]);

  if (loading || fetching) {
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
        <Header />

        <div className={styles.buttonWrapper}>
          <SecondaryButton text='ログイン画面へ' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
        </div>

        <div className={styles.text}>
          <div>ログインしていません。</div>
          <div>ログインして実際に機能を使ってみましょう！</div>
        </div>

        <div className={styles.cardlist}>
          {exampleCardDatas &&
            exampleCardDatas.map((data) => {
              return <DisplayCard urlEnabled={false} key={data.id} {...data} link={`/card/${data.id}`} />;
            })}
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>名刺一覧 - Who!</title>
      </Head>

      <main>
        <Header cardType='card' />

        <div className={styles.buttonWrapper}>
          <SecondaryButton text='+アカウントメモの追加' onClick={() => router.push(`/make/card`)} />
        </div>
        <SearchBar value={inputText} onChange={handleChange} />

        {cardDatas ? (
          // 名刺が存在する時
          <div className={styles.cardlist}>
            {cardDatas.map((data) => {
              if (data.name.includes(inputText)) {
                return <DisplayCard urlEnabled={false} key={data.id} {...data} link={`/card/${data.id}`} />;
              } else if (inputText === '') {
                return <DisplayCard urlEnabled={false} key={data.id} {...data} link={`/card/${data.id}`} />;
              }
            })}
          </div>
        ) : (
          // 名刺が存在しない時
          <>
            <div className={styles.text}>
              <div>データが存在しません。</div>
              <div>新たな友人の名刺を獲得しましょう！</div>
            </div>
            <div className={styles.cardlist}>
              {exampleCardDatas &&
                exampleCardDatas.map((data) => {
                  return <DisplayCard urlEnabled={false} key={data.id} {...data} link={`/card/${data.id}`} />;
                })}
            </div>
          </>
        )}
        <PageTopBackButton />
      </main>
    </>
  );
}
