import { useRouter } from 'next/router';
import { useState } from 'react';
import DisplayCard from '@/components/Card';
import EditColors from '@/components/EditColors';
import EditComplete from '@/components/EditComplete';
import EditTexts from '@/components/EditTexts';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import PrimaryButton from '@/components/PrimaryButton';
import SwitchButton from '@/components/SwitchButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/MycardCreatePage.module.css';
import makemycard from '@/utils/ok/makeMyCard';

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

  const previewName = name || 'sample';

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

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setMode(newAlignment);
    }
  };

  return (
    <>
      <Header onClick_edit={mode === '完了' ? undefined : () => setMode('完了')} />

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
                  <EditComplete handleReturned={() => setMode('入力')} handleCompleted={hundleOnClickEdit} />
                </div>
              );
            }
          })()}
        </div>
      </main>
    </>
  );
}
