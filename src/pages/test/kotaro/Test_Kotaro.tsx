import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/test/TestKotaro.module.css'
import TextInput from '@/conponents/TextInput'
import PrimaryButton from '@/conponents/PrimaryButton'
import SecondaryButton from '@/conponents/SecondaryButton'
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

  return (
    <>
      <main className={styles.main}>
        <PrimaryButton text="ログイン" onClick={() => console.log('PrimaryButton Clicked')} />
        <SecondaryButton text="新規登録" onClick={() => console.log('SecondaryButton Clicked')} />
        <TextInput
          labelText="氏名"
          value={name}
          onChange={hundleName}
        />
        <TextInput
          labelText="X"
          value={x}
          onChange={hundleX}
        />
        <TextInput
          labelText="所属団体"
          value={organization}
          onChange={hundleOrganization}
        />
        <ColorPicker labelText="文字色" value={textColor} onChange={hundleTextColor}/>
        <ColorPicker labelText="背景色" value={bgColor} onChange={hundleBgColor}/>
      </main>
    </>
  )
}