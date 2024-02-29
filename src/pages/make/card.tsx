import Head from 'next/head';
import router from 'next/router';
import { FormEvent, useState } from 'react';
import DisplayCard from '@/components/Card';
import CustomTabPanel from '@/components/CustomTabPanel';
import EditComplete from '@/components/EditComplete';
import InputTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/CardCreatePage.module.css';
import { CARD_TYPE } from '@/types/CardType';
import { FORM_MODE, type FormMode } from '@/types/FormMode';
import makeHaveCard from '@/utils/ok/makeHaveCard';

export default function Index() {
  const [mode, setMode] = useState<FormMode>(FORM_MODE.Texts);
  const tabIndex = mode === FORM_MODE.Texts ? 0 : 2;

  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

  const previewName = name || 'sample';

  const { userId, loading } = useUser();

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
      <DisplayCard name={previewName} organization={organization} x={x} instagram={instagram} urlEnabled={false} textColor='#000' bgColor='#FFF' />
    </div>
  );

  const handleCompleted = async () => {
    const cardData = {
      name,
      organization,
      x,
      instagram,
    };

    const newCardId = await makeHaveCard(userId, cardData);
    router.push(`/card/${newCardId}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      alert('名前を入力して下さい');
      return;
    }

    setMode(FORM_MODE.Complete);
  };

  return (
    <>
      <Head>
        <title>他人の名刺作成 - Who!</title>
      </Head>

      <main className={styles.main}>
        <Header cardType={CARD_TYPE.Have} confirmPageChange />

        <Preview />

        {/* texts */}
        <CustomTabPanel value={tabIndex} index={0}>
          <form action='submit' onSubmit={handleSubmit}>
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
          </form>
        </CustomTabPanel>

        {/* complete */}
        <CustomTabPanel value={tabIndex} index={2}>
          <EditComplete handleReturned={() => setMode(FORM_MODE.Texts)} handleCompleted={handleCompleted} />
        </CustomTabPanel>

        <div className={styles.completeButton}>
          <SecondaryButton text='保存して終了' isSubmit />
        </div>
      </main>
    </>
  );
}
