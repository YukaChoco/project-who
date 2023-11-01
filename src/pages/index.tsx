/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import firebaseLogin from '@/utils/ok/firebaseLogin'
import PrimaryBtton from '@/conponents/PrimaryButton';
import SecondaryButton from '@/conponents/SecondaryButton';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&family=Lemon&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.logo}>Who!</h1>

        <div className={styles.container}>
          <div className={styles.button}>
            <SecondaryButton
              text='ログイン'
              onClick={async () => {
                await firebaseLogin()
                router.push("/cards");
              }}
            />
          </div>

          <div className={styles.button}>
            <PrimaryBtton
              text='新規登録'
              onClick={async () => {
                await firebaseLogin()
                router.push("/cards");
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}
