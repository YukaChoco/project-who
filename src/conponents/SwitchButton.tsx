import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { ToggleButtonProps } from '@mui/material/ToggleButton';

interface SwitchButtonProps {
  leftName: string;
  rightName: string;
  value: string;
  onChange?: ToggleButtonProps['onChange']
}

export default function SwitchButton({
  leftName = '',
  rightName = '',
  value = '',
  onChange = () => { },
}: SwitchButtonProps) {

  return (
    <>
      <ToggleButtonGroup
        value={value}
        exclusive
        fullWidth
        onChange={onChange}
        aria-label="Platform"
        sx={{
          height: 20,
          width: '100%',
          padding: '12px',
        }}
      >
        <ToggleButton value={leftName}>{leftName}</ToggleButton>
        <ToggleButton value={rightName}>{rightName}</ToggleButton>

      </ToggleButtonGroup>
    </>
  );
}