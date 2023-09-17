import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from '@/styles/TextInput.module.css'
import { TextFieldProps } from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

interface Props {
  text: string;
  value: string;
  onChange: TextFieldProps['onChange'];
}

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': "#F4F5FC",
            '--TextField-brandBorderHoverColor': "gray",
            '--TextField-brandBorderFocusedColor': "gray",
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function TextInput(props: Props) {
  const outerTheme = useTheme();
  return (
    <>
      <div className={styles.TextInput_background}>
        {/* textfieldを変えたが何か不都合が起きたとき見比べる用に一応コメントアウトして残してる。いらないなら消しても可 */}
        {/* <TextField className={styles.TextInput} label={props.text} variant="filled"
          sx={{
            input: {
              color: "black",
              background: "#F4F5FC"
            }
          }}
          value={props.value}
          onChange={props.onChange}
          // focused
        /> */}
          <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField className={styles.TextInput}
           sx={{
              input: {
                color: "black",
                background: "#F4F5FC"
              }
            }} 
            label={props.text} 
            variant="filled" 
            value={props.value}
            onChange={props.onChange}
            focused />
        </ThemeProvider>
      </div>
    </>
  )
}