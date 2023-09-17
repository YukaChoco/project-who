import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import ShareButton from '@/conponents/ShareButton'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>LoginPage</h1>
          <SinpleButton />
          <ShareButton onClick={()=>console.log('ShareBtn Clicked')}/>
        </div>
      </main>
    </>
  )
}
