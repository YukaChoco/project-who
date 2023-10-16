/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import FirebaseLogin from '@/utils/firebase/firebaseLogin'
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

        <div className={styles.waku}>
          <div className={styles.btwaku}>
            <button className={styles.PrimaryBtn} onClick={async () => {
              await FirebaseLogin()
              router.push("/cards");
            }}>ログイン</button>
          </div>

          <div className={styles.btwaku}>
            <button className={styles.SecondaryBtn} onClick={async () => {
              await FirebaseLogin()
              router.push("/cards");
            }}>新規登録</button>
          </div>

        </div>
      </main>
    </>
  )
}
