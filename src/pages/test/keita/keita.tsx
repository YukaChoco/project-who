import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import getHaveCardIds from '@/utils/firebase/getHaveCardIds'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getIds = await getHaveCardIds();
        setIds(getIds);
      } catch (error) {
        // Handle any potential errors here
        console.error(error);
      }
    };

    fetchData();
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
