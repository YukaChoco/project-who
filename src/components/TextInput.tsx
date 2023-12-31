import { Box, TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';

interface TextInputProps {
  labelText: string;
  value: string;
  onChange: TextFieldProps['onChange'];
  required?: boolean;
  placeHolder?: string;
  disabled?: boolean;
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
            '--TextField-brandBorderColor': '#F4F5FC',
            '--TextField-brandBorderHoverColor': '#969696',
            '--TextField-brandBorderFocusedColor': '#969696',
            '& label.Mui-focused': {
              color: 'black',
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

export default function TextInput({
  labelText = '',
  value = '',
  onChange = () => {},
  required = false,
  placeHolder = '',
  disabled = false,
}: TextInputProps) {
  const outerTheme = useTheme();
  const backGroundStyle = {
    textAlign: 'center',
    backgroundColor: '#F4F5FC',
    borderRadius: '5px',
    width: '100%',
    padding: '5px',
  };
  return (
    <>
      <Box sx={backGroundStyle}>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            sx={{
              width: '100%',
              padding: '0px 15px',
              input: {
                color: 'black',
                background: '#F4F5FC',
              },
            }}
            label={labelText}
            variant='filled'
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeHolder}
            disabled={disabled}
            focused
          />
        </ThemeProvider>
      </Box>
    </>
  );
}
