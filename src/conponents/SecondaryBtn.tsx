import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/SecondaryBtn.module.css'
import { Button } from '@mui/material'

export default function SecondaryBtn(props) {
  return (
    <>
        <Button variant="outlined" className={styles.SecondaryBtn}>{props.text}</Button>
    </>
  )
}
