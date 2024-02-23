import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import DisplayCard from '@/components/Card';
import CustomTabPanel from '@/components/CustomTabPanel';
import EditComplete from '@/components/EditComplete';
import InputTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/CardCreatePage.module.css';
import { CARD_TYPE } from '@/types/CardType';
import { FORM_MODE } from '@/types/FormMode';
import getCardDetails from '@/utils/ok/getCardDetails';
import updateData from '@/utils/ok/updateData';

export default function Index() {
  const [mode, setMode] = useState<string>('入力');
  const tabIndex = mode === FORM_MODE.Texts ? 0 : 2;

  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

  const { userId, loading } = useUser();

  const router = useRouter();
  const cardId = router.query.cardId as string;

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

    await updateData(cardId, cardData);
    router.push(`/card/${cardId}`);
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

      <main>
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

            <div className={styles.completeButton}>
              <SecondaryButton text='保存して終了' isSubmit />
            </div>
          </form>
        </CustomTabPanel>

        {/* complete */}
        <CustomTabPanel value={tabIndex} index={2}>
          <EditComplete handleReturned={() => setMode(FORM_MODE.Texts)} handleCompleted={handleCompleted} />
        </CustomTabPanel>
      </main>
    </>
  );
}
