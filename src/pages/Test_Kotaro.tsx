import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/TestKotaro.module.css'
import NameInput from '@/conponents/NameInput'
import PrimaryBtn from '@/conponents/PrimaryBtn'
import SecondaryBtn from '@/conponents/SecondaryBtn'
import SNSInput from '@/conponents/SNSInput'
import ColorPicker from '@/conponents/ColorPicker'

const inter = Inter({ subsets: ['latin'] })

export default function Input() {
  return (
    <>
      <main className={styles.main}>
        <PrimaryBtn text="ログイン" />
        <SecondaryBtn text="新規登録" />
        <NameInput text="氏名"/>
        <SNSInput text="@" onClick={()=>console.log('OK')}/>
        <ColorPicker text="文字色"/>
      </main>
    </>
  )
}