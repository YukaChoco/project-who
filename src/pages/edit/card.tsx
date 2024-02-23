import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DisplayCard from '@/components/Card';
import EditComplete from '@/components/EditComplete';
import InputTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import PrimaryButton from '@/components/PrimaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/CardCreatePage.module.css';
import getCardDetails from '@/utils/ok/getCardDetails';
import updateData from '@/utils/ok/updateData';

export default function Index() {
  const [mode, setMode] = useState<string>('入力');
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

  const { userId, loading } = useUser();

  const router = useRouter();
  const cardId = router.query.cardId as string;

  const cardData = {
    name,
    organization,
    x,
    instagram,
  };

  useEffect(() => {
    async function getEarlierCardData() {
      try {
        const cardDetails = await getCardDetails(cardId);

        if (cardDetails) {
          setName(cardDetails.name);
          setX(cardDetails.x);
          setInstagram(cardDetails.instagram);
          setOrganization(cardDetails.organization);
        } else {
          console.log(`not found`);
        }
      } catch (error) {
        console.error('Error', error);
      }
    }

    getEarlierCardData();
  }, [cardId]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!userId) {
    return (
      <main>
        <Header />
        <h1>ログインしてください</h1>
        <PrimaryButton text='ログインこちら' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
      </main>
    );
  }

  const Preview = () => (
    <div className={styles.preview}>
      <p>プレビュー</p>
      <DisplayCard name={name} organization={organization} x={x} instagram={instagram} urlEnabled={false} textColor='#000' bgColor='#FFF' />
    </div>
  );

  const handleCompleted = async () => {
    updateData(cardId, cardData);
    router.push('/cards');
  };
  if (mode === '入力') {
    return (
      <>
        <Head>
          <title>他人の名刺修正 - Who!</title>
        </Head>
        <main>
          <Header onClick_edit={() => setMode('完了')} />

          <Preview />

          <InputTexts
            name={name}
            handleName={(event) => setName(event.target.value)}
            instagram={instagram}
            handleInstagram={(event) => setInstagram(event.target.value)}
            x={x}
            handleX={(event) => setX(event.target.value)}
            organization={organization}
            handleOrganization={(event) => setOrganization(event.target.value)}
          />
        </main>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>他人の名刺修正 - Who!</title>
        </Head>

        <main>
          <Header />

          <Preview />

          <EditComplete handleReturned={() => setMode('入力')} handleCompleted={handleCompleted} />
        </main>
      </>
    );
  }
}
