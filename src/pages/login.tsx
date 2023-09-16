import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SecondaryBtn from '@/conponents/SecondaryBtn'
import PrimaryBtn from '@/conponents/PrimaryBtn'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <PrimaryBtn text="ログイン" onClick={()=>console.log('PrimaryBtn Clicked')}/>
          <SecondaryBtn text="新規登録" onClick={()=>console.log('SecondaryBtn Clicked')}/>
        </div>
      </main>
    </>
  )
}
