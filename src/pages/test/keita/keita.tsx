import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import getHaveCardIds from '@/utils/ok/getHaveCardIds'
import { useEffect, useState } from 'react'
import getMyCardIds from '@/utils/ok/getMyCardIds'
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getIds = await getMyCardIds();
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
