import { useRouter } from 'next/router';
import { useState } from 'react';
import DisplayCard from '@/components/Card';
import EditColors from '@/components/EditColors';
import EditComplete from '@/components/EditComplete';
import EditTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import SwitchButton from '@/components/SwitchButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/MycardCreatePage.module.css';
import { FORM_MODE, type FormMode } from '@/types/FormMode';
import makemycard from '@/utils/ok/makeMyCard';

export default function Input() {
  const [mode, setMode] = useState<FormMode>(FORM_MODE.Texts);
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [bgColor, setBgColor] = useState<string>('#ffffff');

  const router = useRouter();
  const { userId, loading } = useUser();

  const previewName = name || 'sample';

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

  const hundleOnClickEdit = () => {
    const cardData = {
      name: name,
      x: x,
      instagram: instagram,
      organization: organization,
      textColor: textColor,
      bgColor: bgColor,
    };
    console.log(cardData);
    router.push('/mycards');

    makemycard(userId, cardData);
  };

  const handleSwitch = (event: React.MouseEvent<HTMLElement>, newAlignment: FormMode | null) => {
    if (newAlignment !== null) {
      setMode(newAlignment);
    }
  };

  return (
    <>
      <Header onClick_edit={mode === FORM_MODE.Complete ? undefined : () => setMode(FORM_MODE.Complete)} />

      <main className={styles.main}>
        <div className={styles.preview}>
          <p>プレビュー</p>
        </div>

        <div className={styles.card}>
          <DisplayCard
            name={previewName}
            organization={organization}
            x={x}
            instagram={instagram}
            urlEnabled={false}
            textColor={textColor}
            bgColor={bgColor}
          />
        </div>

        <div className={styles.change}>
          {(() => {
            if (mode === FORM_MODE.Colors) {
              return (
                <div>
                  <div className={styles.swith}>
                    <SwitchButton leftName={FORM_MODE.Texts} rightName={FORM_MODE.Colors} value={mode} onChange={handleSwitch} />
                  </div>

                  <EditColors
                    textColor={textColor}
                    handleTextColor={(event) => setTextColor(event.target.value)}
                    bgColor={bgColor}
                    handleBgColor={(event) => setBgColor(event.target.value)}
                  />
                </div>
              );
            } else if (mode === FORM_MODE.Texts) {
              return (
                <div>
                  <div className={styles.swith}>
                    <SwitchButton leftName={FORM_MODE.Texts} rightName={FORM_MODE.Colors} value={mode} onChange={handleSwitch} />
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
                  <EditComplete handleReturned={() => setMode(FORM_MODE.Texts)} handleCompleted={hundleOnClickEdit} />
                </div>
              );
            }
          })()}
        </div>
      </main>
    </>
  );
}
