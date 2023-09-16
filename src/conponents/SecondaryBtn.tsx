import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/SecondaryBtn.module.css'
import { Button } from '@mui/material'

interface Props {
    text: string;
    onClick?: () => void;
  }

export default function SecondaryBtn(props: Props) {
  return (
    <>
        <Button variant="outlined" className={styles.SecondaryBtn} onClick={props.onClick}>{props.text}</Button>
    </>
  )
}
