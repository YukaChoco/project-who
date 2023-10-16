import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from '@/styles/ColorPicker.module.css'

interface Props {
  text: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ColorPicker(props: Props) {
  return (
    <>
      <div className={styles.container}>
        <label htmlFor={`${props.text}`}>{props.text}</label>
        <input itemID={`${props.text}`} type="color" id="style1" value={props.value} onChange={props.onChange} />
      </div>
    </>
  )
}