import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Input.module.css'
import NameInput from '@/conponents/NameInput'

const inter = Inter({ subsets: ['latin'] })

export default function Input() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <NameInput text="氏名"/>
        </div>
      </main>
    </>
  )
}