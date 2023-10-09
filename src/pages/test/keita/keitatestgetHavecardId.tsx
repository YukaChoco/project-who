import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import get from '@/utils/firebase/firestore'
import setUserData from '@/utils/firebase/setUserData'
import AddMyCard from '@/utils/firebase/addMyCard'
import AddHaveCard from '@/utils/firebase/addHaveCard'
const inter = Inter({ subsets: ['latin'] })
import firestore from '@/utils/firebase/firestore'
import getHaveCards from '@/utils/firebase/getHaveCards'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'


interface Props {
  userid: string;
}
// idをとる関数
async function getMyCardsComp(docData: Props) {
  const querySnapshot = await getDoc(doc(db, "users", docData.userid));
  const userdata: any = querySnapshot.data()
  const ids = userdata['my_card_ids']
  return ids
}


export default function test() {
  const [ids, setIds] = useState(['loading', 'loading'])

  const docData = {
    userid: "68nUIBWcWlpw2sJV3wGh",
    havecardid: "LygvCAt8peiyIfP3tCSL",
  };

  useEffect(() => {
    //ログイン状態確認
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const docData = {
          userid: uid,
        };
        const fetchedIds: any = await getMyCardsComp(docData);
        setIds(fetchedIds)
        console.log(fetchedIds);

      } else {
        // User is signed out
        // ...
      }
    });
    return unsubscribe
  }, [])
  return (
    <>

      <main className={styles.main}>
        <div className={styles.center}>
          <h1>LoginPage</h1>

          <h2>{ids[1]}</h2>

        </div>

      </main>

    </>
  )

}
