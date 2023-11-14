import * as React from 'react';
import { Box } from '@mui/material';

interface ColorPickerProps {
  labelText: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorPicker({ labelText = '色の指定', value = '#FFF', onChange = () => {} }: ColorPickerProps) {
  const containerStyle = {
    backgroundColor: '#F4F5FC',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  };
  const labelStyle = {
    fontSize: '0.8rem',
    padding: '20px',
  };
  const inputStyle = {
    width: '36px',
    height: '40px',
    margin: 'auto 20px',
    border: 'none',
  };

  return (
    <Box sx={containerStyle}>
      <label htmlFor={labelText} style={labelStyle}>
        {labelText}
      </label>
      <input type='color' id={labelText} value={value} onChange={onChange} style={inputStyle} />
    </Box>
  );
}
