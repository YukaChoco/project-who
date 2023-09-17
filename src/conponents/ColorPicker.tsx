import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from '@/styles/ColorPicker.module.css'

interface Props {
    text: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NameInput(props: Props) {
  return (
    <>
    <div className={styles.ColorPicker_background}>
      <div className={styles.ColorPicker_container}>
        <p>{props.text}</p>
        <input type="color" id="style1" value={props.value} onChange={props.onChange}/>
      </div>
    </div>
    </>
  )
}