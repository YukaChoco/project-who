import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import get from '@/utils/firebase/firestore'
import setUserData from '@/utils/firebase/setUserData'
import AddMyCard from '@/utils/firebase/addMyCard'
import AddHaveCard from '@/utils/firebase/addHaveCard'
const inter = Inter({ subsets: ['latin'] })


export default function Login() {

  return(
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>LoginPage</h1>
          {/* <button onClick={()=>AddHaveCard()}>add</button> */}

          {/* 自分のカード作成してuserのmy_cardsに追加とcardsに追加 */}
          <button onClick={()=>AddMyCard()}>addMy</button> 
          
        </div>
      </main>
    </>
  )
 
}
