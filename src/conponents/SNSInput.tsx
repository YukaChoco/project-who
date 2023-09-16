import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createSvgIcon } from '@mui/material/utils';
import styles from '@/styles/SNSInput.module.css'

interface Props {
    text: string;
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


export default function NameInput(props: Props) {
    const [SNS, setSNS] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSNS(event.target.value as string);
  };
  return (
    <>
    <div className={styles.SNSInput_background}>
        <Box sx={{ minWidth: 120}} className={styles.SelectIconContainer}>
        <FormControl fullWidth className={styles.SNSSelect}>
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
        <PlusIcon className={styles.PlusIcon} onClick={props.onClick}/>
        </Box>
        <TextField  className={styles.SNSInput} label="@" variant="filled"
            sx={{
            input: {
                color: "black",
                background: "#F4F5FC"
            }
            }}
            focused
            />
    </div>
    </>
  )
}