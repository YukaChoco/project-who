import Head from 'next/head';
import router from 'next/router';
import { useState } from 'react';
import DisplayCard from '@/components/Card';
import EditComplete from '@/components/EditComplete';
import InputTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/CardCreatePage.module.css';
import makeHaveCard from '@/utils/ok/makeHaveCard';

export default function Index() {
  const [mode, setMode] = useState<string>('入力');
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

  const { userId, loading } = useUser();

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
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
    const cardData = {
      name,
      organization,
      x,
      instagram,
    };
    await makeHaveCard(userId, cardData);
    router.push('/cards');
  };

  if (mode === '入力') {
    return (
      <>
        <Head>
          <title>他人の名刺作成 - Who!</title>
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
          <title>他人の名刺作成 - Who!</title>
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
