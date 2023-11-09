import { Inter } from 'next/font/google'
import styles from '@/styles/test/Login.module.css'
import { useEffect, useState } from 'react'
import getMyCardIds from '@/utils/ok/getMyCardIds'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
 
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    
    
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid)
            const getIds = await getMyCardIds(uid);
            setIds(getIds);
            console.log(getIds)
         } else {
          console.log('not user')
        }
      });
  
  }, []);

  if (ids) {
    console.log(ids)
    const showIds = ids.map((id, index) => <p key={id}>id[{index}]={id}</p>)
    return (
      <>
        <main className={styles.main}>
          <div className={styles.center}>
            <h1>{showIds}</h1>
          </div>
        </main>
      </>
    )
  } else {

    return (
      <>
        <main className={styles.main}>
          <div className={styles.center}>
            <h1>Loading</h1>
          </div>
        </main>
      </>
    );
  }
}
