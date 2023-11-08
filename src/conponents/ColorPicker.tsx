import * as React from 'react';
import { Box } from '@mui/material';

interface Props {
  text: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ColorPicker(props: Props) {
  const containerStyle = {
    backgroundColor: '#F4F5FC',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
  const labelStyle = {
    fontSize: '0.8rem',
    padding: '20px',
  }
  const inputStyle = {
    width: '36px',
    height: '40px',
    margin: 'auto 20px',
    border: 'none',
  }

  return (
    <Box sx={containerStyle}>
      <label
        htmlFor={`${props.text}`}
        style={labelStyle}
      >
        {props.text}
      </label>
      <input
        type="color"
        id={`${props.text}`}
        value={props.value}
        onChange={props.onChange}
        style={inputStyle}
      />
    </Box>
  )
}