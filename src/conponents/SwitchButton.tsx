import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButtonProps } from '@mui/material/ToggleButton';

type Props = {
  leftName: string;
  rightName: string;
  value: string;
  onChange?: ToggleButtonProps['onChange']
}

export default function SwitchButton(props: Props) {

  return (
    <>
      <ToggleButtonGroup
        value={props.value}
        exclusive
        fullWidth
        onChange={props.onChange}
        aria-label="Platform"
        sx={{
          height: 30,
          width: '100%',
          margin: '20px 0',
          // margin: '0px 20px',
        }}
      >
        <ToggleButton value={props.leftName}>{props.leftName}</ToggleButton>
        <ToggleButton value={props.rightName}>{props.rightName}</ToggleButton>

      </ToggleButtonGroup>
    </>
  );
}