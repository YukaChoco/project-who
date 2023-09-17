import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/TestKotaro.module.css'
import NameInput from '@/conponents/NameInput'
import PrimaryBtn from '@/conponents/PrimaryBtn'
import SecondaryBtn from '@/conponents/SecondaryBtn'
import ColorPicker from '@/conponents/ColorPicker'

const inter = Inter({ subsets: ['latin'] })

export default function Input() {

  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');

  function hundleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function hundleX(event: React.ChangeEvent<HTMLInputElement>) {
    setX(event.target.value);
  }
  function hundleOrganization(event: React.ChangeEvent<HTMLInputElement>) {
    setOrganization(event.target.value);
  }

  //hundleTextColorついか
  console.log(textColor);

  return (
    <>
      <main className={styles.main}>
        <PrimaryBtn text="ログイン" onClick={() => console.log('PrimaryBtn Clicked')} />
        <SecondaryBtn text="新規登録" onClick={() => console.log('Secondarybtn Clicked')} />
        <NameInput
          text="氏名"
          value={name}
          onChange={hundleName}
        />
        <NameInput
          text="X"
          value={x}
          onChange={hundleX}
        />
        <NameInput
          text="所属団体"
          value={organization}
          onChange={hundleOrganization}
        />
        <ColorPicker text="文字色" />
        <ColorPicker text="背景色" />
      </main>
    </>
  )
}