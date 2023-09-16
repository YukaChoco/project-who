import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/PrimaryBtn.module.css'
import { Button } from '@mui/material'

export default function PrimaryBtn(props) {
  return (
    <>
        <Button variant="outlined" className={styles.PrimaryBtn}>{props.text}</Button>
    </>
  )
}