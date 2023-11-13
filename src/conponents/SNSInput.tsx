import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createSvgIcon } from '@mui/material/utils';

interface SNSInputProps {
  labelText: string;
  onClick?: () => void;
}

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);


export default function SNSInput({
  labelText = '',
  onClick = () => { },
}: SNSInputProps) {
  const [SNS, setSNS] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSNS(event.target.value as string);
  };

  //現状使用していないため、動作チェックしていません。スタイルを中心に確認してください。
  const inputStyle = {
    width: '100%',
    margin: '0px 20px',
  }
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: '#F4F5FC',
    borderRadius: '5px',
    width: '100%',
    height: '125px',
    margin: '5px 0',
    minWidth: 120,
  }
  const snsContainerStyle = {
    position: 'relative',
  }
  const selectStyle = {
    float: 'left',
    left: '0',
    margin: '5px 10px 0 10px',
    width: '42%',
    backgroundColor: 'white',
  }
  const plusIconStyle = {
    float: 'left',
    position: 'absolute',
    right: '0',
    margin: '10px',
    height: '40px',
    width: '40px',
  }
  return (
    <Box sx={containerStyle}>
      <Box sx={snsContainerStyle}>
        <FormControl fullWidth sx={selectStyle}>
          <InputLabel id="demo-simple-select-label">SNS</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={SNS}
            label="SNS"
            onChange={handleChange}
          >
            <MenuItem value={10}>X</MenuItem>
            <MenuItem value={20}>Instagram</MenuItem>
            <MenuItem value={30}>Facebook</MenuItem>
            <MenuItem value={40}>mail</MenuItem>
          </Select>
        </FormControl>
        <PlusIcon sx={plusIconStyle} onClick={onClick} />
      </Box>
      <TextField label="@" variant="filled"
        sx={{
          ...inputStyle,
          input: {
            color: "black",
            background: "#F4F5FC"
          }
        }
        }
        focused
      />
    </Box>
  )
}