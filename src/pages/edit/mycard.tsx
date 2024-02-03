import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DisplayCard from '@/components/Card';
import EditColors from '@/components/EditColors';
import EditComplete from '@/components/EditComplete';
import EditTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import SwitchButton from '@/components/SwitchButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/MycardCreatePage.module.css';
import getCardDetails from '@/utils/ok/getCardDetails';
import updateData from '@/utils/ok/updateData';

export default function Input() {
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [bgColor, setBgColor] = useState<string>('#ffffff');

  const router = useRouter();
  const { userId, loading } = useUser();
  const [mode, setMode] = useState<string>('入力');

  const cardId = router.query.cardId as string;

  const cardData = {
    name,
    organization,
    x,
    instagram,
    textColor,
    bgColor,
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
          setTextColor(cardDetails.textColor);
          setBgColor(cardDetails.bgColor);
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
      <>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }
  if (!userId) {
    return (
      <>
        <main>
          <Header />
          <p>ログインしてください</p>
          <PrimaryButton text='ログインこちら' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
        </main>
      </>
    );
  }

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setMode(newAlignment);
    }
  };

  const Preview = () => (
    <div className={styles.preview}>
      <p>プレビュー</p>
      <DisplayCard name={name} organization={organization} x={x} instagram={instagram} urlEnabled={false} textColor={textColor} bgColor={bgColor} />
    </div>
  );

  const handleCompleted = async () => {
    updateData(cardId, cardData);
    router.push('/mycards');
  };

  return (
    <>
      <Head>
        <title>他人の名刺修正 - Who!</title>
      </Head>

      <main className={styles.main}>
        <Header onClick_edit={() => setMode('完了')} />

        <Preview />

        <div className={styles.change}>
          {(() => {
            if (mode == 'デザイン') {
              return (
                <div>
                  <div className={styles.swith}>
                    <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment} />
                  </div>

                  <EditColors
                    textColor={textColor}
                    handleTextColor={(event) => setTextColor(event.target.value)}
                    bgColor={bgColor}
                    handleBgColor={(event) => setBgColor(event.target.value)}
                  />
                </div>
              );
            } else if (mode == '入力') {
              return (
                <div>
                  <div className={styles.swith}>
                    <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment} />
                  </div>
                  <EditTexts
                    name={name}
                    handleName={(event) => setName(event.target.value)}
                    instagram={instagram}
                    handleInstagram={(event) => setInstagram(event.target.value)}
                    x={x}
                    handleX={(event) => setX(event.target.value)}
                    organization={organization}
                    handleOrganization={(event) => setOrganization(event.target.value)}
                  />
                </div>
              );
            } else {
              return (
                <div className={styles.editBtn}>
                  <EditComplete handleReturned={() => setMode('入力')} handleCompleted={handleCompleted} />
                </div>
              );
            }
          })()}
        </div>
      </main>
    </>
  );
}
