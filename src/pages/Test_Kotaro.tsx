import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/TestKotaro.module.css'
import TextInput from '@/conponents/TextInput'
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

  function hundleTextColor(event: React.ChangeEvent<HTMLInputElement>) {
    setTextColor(event.target.value);
  }

  function hundleBgColor(event: React.ChangeEvent<HTMLInputElement>) {
    setBgColor(event.target.value);
  }

  //hundleTextColorついか
  console.log(textColor);

  return (
    <>
      <main className={styles.main}>
        <PrimaryBtn text="ログイン" onClick={() => console.log('PrimaryBtn Clicked')} />
        <SecondaryBtn text="新規登録" onClick={() => console.log('Secondarybtn Clicked')} />
        <TextInput
          text="氏名"
          value={name}
          onChange={hundleName}
        />
        <TextInput
          text="X"
          value={x}
          onChange={hundleX}
        />
        <TextInput
          text="所属団体"
          value={organization}
          onChange={hundleOrganization}
        />
        <ColorPicker text="文字色" value={textColor} onChange={hundleTextColor}/>
        <ColorPicker text="背景色" value={bgColor} onChange={hundleBgColor}/>
      </main>
    </>
  )
}