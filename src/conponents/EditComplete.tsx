import styles from '@/styles/creatText.module.css'
import { useState } from 'react'
import PrimaryButton from '@/conponents/PrimaryButton'
import SecondaryButton from '@/conponents/SecondaryButton'


interface Props {
    setMode: () => void;
}

export default function EditCompleted(props: Props) {

  return (
    <>
            <PrimaryButton text="編集に戻る" onClick={props.setMode} />
            <SecondaryButton text="保存して終了" onClick={() => console.log('作成完了！')} />
        <div className={styles.space} />
    </>
  )
}