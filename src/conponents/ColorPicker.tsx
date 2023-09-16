import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from '@/styles/ColorPicker.module.css'

interface Props {
    text: string;
}

export default function NameInput(props: Props) {
  return (
    <>
    <div className={styles.ColorPicker_background}>
        <p>{props.text}</p>
        <input type="color" />
    </div>
    </>
  )
}