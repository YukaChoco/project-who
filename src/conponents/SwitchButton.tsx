import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButtonProps } from '@mui/material/ToggleButton';

type Props = {
    leftName?: string;
    rightName?: string;
    value?: string;
    onChange?: ToggleButtonProps['onChange']
}

export default function SwitchButton(props:Props) {
    
    return (
      <ToggleButtonGroup
        color="primary"
        value={props.value}
        exclusive
        fullWidth
        onChange={props.onChange}
        aria-label="Platform"
        sx={{
            height: 20,
            width: "100%",
        }}
      >
        <ToggleButton value="leftName">{props.leftName}</ToggleButton>
        <ToggleButton value="rigntName">{props.rightName}</ToggleButton>

      </ToggleButtonGroup>
    );
  }