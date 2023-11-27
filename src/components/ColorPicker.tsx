import { Box, FormHelperText, FormLabel } from '@mui/material';
import * as React from 'react';

interface ColorPickerProps {
  labelText: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

export default function ColorPicker({
  labelText = '色の指定',
  value = '#FFF',
  onChange = () => {},
  required = false,
  error = false,
  helperText = '',
}: ColorPickerProps) {
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
    <Box>
      <Box sx={containerStyle}>
        <FormLabel htmlFor={labelText} style={labelStyle} error={error} required={required}>
          {labelText}
        </FormLabel>
        <input type='color' id={labelText} value={value} onChange={onChange} style={inputStyle} />
      </Box>
      {helperText && (
        <FormHelperText sx={{ padding: '0px 10px' }} error={error} required={required}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
}
