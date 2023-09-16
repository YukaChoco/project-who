import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SecondaryBtn from '@/conponents/secondaryBtn'
import PrimaryBtn from '@/conponents/primaryBtn'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <PrimaryBtn text="ログイン" />
          <SecondaryBtn text="新規登録"/>
        </div>
      </main>
    </>
  )
}
