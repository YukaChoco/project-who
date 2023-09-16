import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Comp_check.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import ShareButton from '@/conponents/ShareButton'

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const inter = Inter({ subsets: ['latin'] })

export default function Comp_check() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>LoginPage</h1>
          <SinpleButton />
          <ShareButton />
        </div>
      </main>
    </>
  )
}