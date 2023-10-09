import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import getHaveCardIds from '@/utils/firebase/getHaveCardIds'
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  const { ids } = getHaveCardIds()
  if (ids) {
    console.log(ids)
    return (
      <>
        <main className={styles.main}>
          <div className={styles.center}>
            <h1>{ids[0]}</h1>
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
