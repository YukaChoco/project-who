import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/TestKotaro.module.css'
import Header from '@/conponents/Header'


const inter = Inter({ subsets: ['latin'] })
export default function Input() {
//   const [bool, setBool] = useState(true);
//   const [bool2, setBool2] = useState(true);
  return (
    <>

      <main className={styles.main}>
        <Header
          useSearchIcon
          useMenuIcon
          onClick_edit={() => console.log('編集完了')}
          onClick_register={() => console.log('登録')}
        />
        <div className={styles.aa}></div>
      </main>
    </>
  )
}