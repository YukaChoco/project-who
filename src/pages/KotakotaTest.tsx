import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/TestKotaro.module.css'
import Header from '@/conponents/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Input() {

  return (
    <>

      <main className={styles.main}>
            <Header />
        </main>
    </>
  )
}