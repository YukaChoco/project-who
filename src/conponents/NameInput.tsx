import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from '@/styles/NameInput.module.css'
import { TextFieldProps } from '@mui/material/TextField';

interface Props {
  text: string;
  value: string;
  onChange: TextFieldProps['onChange'];
}

export default function NameInput(props: Props) {
  return (
    <>
      <div className={styles.NameInput_background}>
        <TextField className={styles.NameInput} label={props.text} variant="filled"
          sx={{
            input: {
              color: "black",
              background: "#F4F5FC"
            }
          }}
          value={props.value}
          onChange={props.onChange}
          // focused
        />
      </div>
    </>
  )
}