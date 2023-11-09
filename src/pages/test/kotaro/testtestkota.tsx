import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/test/TestKotaro.module.css'
import Drawer from '@/conponents/Drawer'
import { Details } from '@/types/Details'

const inter = Inter({ subsets: ['latin'] })


export default function TestDisplay() {


  return (
    <>
      <main className={styles.main}>
        <Drawer />
      </main>
    </>
  )
}
