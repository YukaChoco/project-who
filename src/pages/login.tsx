import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import get from '@/utils/firebase/firestore'
import setUserData from '@/utils/firebase/setUserData'
import AddMyCard from '@/utils/firebase/addMyCard'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  // get("user", "hOvlmmbmHDuD92fk8ZZB");
  // get();

  const docData = {
    name: "Hello world!", //フィールド値
    x: "hogehoge",
    instagram: "hugahuga",
  };
  // const userId = 1;
  // const cardId = [1, 2, 3]; //by userId
  // const card = cardId.map((value, index) => {
  //   const data = ["twitter_id", "insta_id", "red"]; //by value
  //   return (
  //     <div key={index + 1}>data.instagram</div>
  //   )
  // })
  // setUserData(docData);


  // const ids = AddMyCard().catch;
  // const display = ids.map((id) => <div key={id}>id</div>)
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>LoginPage</h1>
          {/* {display} */}
          <SinpleButton />
        </div>
      </main>
    </>
  )
}
