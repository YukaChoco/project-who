import styles from '@/styles/creatText.module.css'
import { useState } from 'react'
import PrimaryBtn from '@/conponents/PrimaryBtn'
import SecondaryBtn from '@/conponents/SecondaryBtn'


interface Props {
    setMode: () => void;
}

export default function EditCompleted(props: Props) {

  return (
    <>
            <PrimaryBtn text="編集に戻る" onClick={props.setMode} />
            <SecondaryBtn text="保存して終了" onClick={() => console.log('作成完了！')} />
        <div className={styles.space} />
    </>
  )
}