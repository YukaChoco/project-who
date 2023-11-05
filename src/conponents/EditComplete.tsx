import styles from '@/styles/creatText.module.css'
import { useState } from 'react'
import PrimaryBtn from '@/conponents/PrimaryBtn'
import SecondaryBtn from '@/conponents/SecondaryBtn'


interface Props {
    setMode: () => void;
    setData: () => void;
}

export default function EditCompleted(props: Props) {

  return (
    <>
            <PrimaryBtn text="編集に戻る" onClick={props.setMode} />
            <div className={styles.space} />
            <SecondaryBtn text="保存して終了" onClick={props.setData} />
        <div className={styles.space} />
    </>
  )
}