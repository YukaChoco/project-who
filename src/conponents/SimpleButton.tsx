import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/SimpleButton.module.css'
import { Button } from '@mui/material'

export default function SinpleButton() {
  return (
    <Button className={styles.button}>Button</Button>
  )
}
