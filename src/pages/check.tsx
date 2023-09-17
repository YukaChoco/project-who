import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import type { Cards } from '@/types/Cards'
import DisplayCard from '@/conponents/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          
          <DisplayCard 
            id={"1"}
            name={"焼肉太郎"}
            organization={"焼肉モリモリクラブ"}
            x={"yakinikuumai"}
            instagram={"yakiyaki"}
            others={"xxx"}
            urlEnabled={false}
            textColor= {"#0FF"}
            bgColor={"#FFF"}
            onClickHandler={()=>{}}
            />
        </div>
      </main>
    </>
  )
}