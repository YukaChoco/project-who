import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import DisplayCard from '@/components/Card';
import CustomTabPanel from '@/components/CustomTabPanel';
import EditColors from '@/components/EditColors';
import EditComplete from '@/components/EditComplete';
import EditTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import SwitchButton from '@/components/SwitchButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/MycardCreatePage.module.css';
import type { CardData } from '@/types/CardData';
import { CARD_TYPE } from '@/types/CardType';
import { FORM_MODE, FormMode } from '@/types/FormMode';
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
  const tabIndex = mode === FORM_MODE.Texts ? 0 : mode === FORM_MODE.Colors ? 1 : 2;

  const cardId = router.query.cardId as string;

  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
    async function getEarlierCardData() {
      try {
        const cardDetails = await getCardDetails(cardId);
        setCardData(cardDetails);

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
          <Loading />
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

  const Preview = () => (
    <div className={styles.preview}>
      <p>プレビュー</p>
      <DisplayCard name={name} organization={organization} x={x} instagram={instagram} urlEnabled={false} textColor={textColor} bgColor={bgColor} />
    </div>
  );

  const handleCompleted = async () => {
    const cardData = {
      name: name,
      x: x,
      instagram: instagram,
      organization: organization,
      textColor: textColor,
      bgColor: bgColor,
    };

    await updateData(cardId, cardData);
    router.push(`/card/${cardId}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      alert('名前を入力して下さい');
      return;
    } else if (bgColor === textColor) {
      alert('文字色と背景色には異なる色を指定してください。');
      return;
    }

    setMode(FORM_MODE.Complete);
  };

  const handleSwitch = (event: React.MouseEvent<HTMLElement>, newAlignment: FormMode | null) => {
    if (newAlignment !== null) {
      setMode(newAlignment);
    }
  };

  const ShowSwitchButton = () => (
    <div className={styles.swith}>
      <SwitchButton leftName={FORM_MODE.Texts} rightName={FORM_MODE.Colors} value={mode} onChange={handleSwitch} />
    </div>
  );
  if (cardData?.authorId === userId) {
    return (
      <>
        <Head>
          <title>自分の名刺修正 - Who!</title>
        </Head>

        <main className={styles.main}>
          <Header cardType={CARD_TYPE.My} confirmPageChange />

          <Preview />

          <form className={styles.change} onSubmit={handleSubmit}>
            {/* texts */}
            <CustomTabPanel value={tabIndex} index={0}>
              <ShowSwitchButton />
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
            </CustomTabPanel>

            {/* colors */}
            <CustomTabPanel value={tabIndex} index={1}>
              <ShowSwitchButton />
              <EditColors
                textColor={textColor}
                handleTextColor={(event) => setTextColor(event.target.value)}
                bgColor={bgColor}
                handleBgColor={(event) => setBgColor(event.target.value)}
              />
            </CustomTabPanel>

            {/* complete */}
            <CustomTabPanel value={tabIndex} index={2}>
              <div className={styles.editButton}>
                <EditComplete handleReturned={() => setMode(FORM_MODE.Texts)} handleCompleted={handleCompleted} />
              </div>
            </CustomTabPanel>

            {mode !== FORM_MODE.Complete ? (
              <div className={styles.completeButton}>
                <SecondaryButton text='保存して終了' isSubmit />
              </div>
            ) : null}
          </form>
        </main>
      </>
    );
  } else {
    return (
      <main>
        <Header />
        <h2>他人の名刺は編集できません</h2>
        <PrimaryButton text='名刺一覧に戻る' onClick={() => router.push(`/cards`)} />
      </main>
    );
  }
}
