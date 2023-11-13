import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import styles from '@/styles/MycardCreatePage.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import SwitchButton from '@/conponents/SwitchButton'
import EditColors from '@/conponents/EditColors' //名前変えた
import EditTexts from '@/conponents/EditTexts' //名前変えた
import EditComplete from '@/conponents/EditComplete'
import makemycard from '@/utils/ok/makeMyCard'
import type { CardData } from '@/types/CardData'
import PrimaryButton from '@/conponents/PrimaryButton';

const inter = Inter({ subsets: ['latin'] })

export default function Input() {
  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');

  const router = useRouter();
  const { userId, loading } = useUser();
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [mode, setMode] = useState<string>('入力');

  if (loading) {
    return (
      <>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    )
  }
  if(!userId){ //追加
    return(
      <>
        <main>
          <p>ログインしてください</p>
          <PrimaryButton
              text='ログインこちら'
              onClick={()=>
                router.push("/")
              }
            />
        </main>
      </>
    )
  }
  //userId==NULLのときエラー処理追加

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
    router.push("/mycards");
    if (userId) { //kesu
      makemycard(userId, cardData);
    }
  }


  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setMode(newAlignment);
    }
  };

  return (
    <>
      <Header
        onClick_edit={mode === "完了" ? undefined : () => setMode("完了")}
      />

      <main className={styles.main}>

        <div className={styles.preview}>
          <p>プレビュー</p>
        </div>

        <div className={styles.card}>
          <DisplayCard name={name} organization={organization} x={x} instagram={instagram} urlEnabled={false} textColor={textColor} bgColor={bgColor} />
        </div>

        <div className={styles.change}>
          {
            (() => {
              if (mode == "デザイン") {
                return (
                  <div>
                    <div className={styles.swith}>
                      <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment} />
                    </div>

                    <EditColors textColor={textColor} handleTextColor={(event) => setTextColor(event.target.value)} bgColor={bgColor} handleBgColor={(event) => setBgColor(event.target.value)} />
                  </div>
                );
              } else if (mode == "入力") {
                return (
                  <div>
                    <div className={styles.swith}>
                      <SwitchButton leftName={'入力'} rightName={'デザイン'} value={''} onChange={handleAlignment} />
                    </div>
                    <EditTexts name={name} handleName={(event) => setName(event.target.value)} instagram={instagram} handleInstagram={(event) => setInstagram(event.target.value)} x={x} handleX={(event) => setX(event.target.value)} organization={organization} handleOrganization={(event) => setOrganization(event.target.value)} />
                  </div>
                );
              } else {
                return (
                  <div className={styles.editBtn}>
                    <EditComplete
                      handleReturned={() => setMode('入力')}
                      handleCompleted={hundleOnClickEdit}
                    />
                  </div>
                )
              }
            })()
          }
        </div>
      </main>
    </>
  )
}