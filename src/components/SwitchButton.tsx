import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { ToggleButtonProps } from '@mui/material/ToggleButton';
import * as React from 'react';

interface SwitchButtonProps {
  leftName: string;
  rightName: string;
  value: string;
  selected: boolean;
  onChange?: ToggleButtonProps['onChange'];
}

export default function SwitchButton({ leftName = '', rightName = '', value = '', onChange = () => {}, selected = false }: SwitchButtonProps) {
  return (
    <>
      <ToggleButtonGroup
        value={value}
        exclusive
        fullWidth
        onChange={onChange}
        aria-label='Platform'
        sx={{
          height: 30,
          width: '100%',
          margin: '20px 0',
        }}
      >
        <ToggleButton value={leftName} selected={!selected}>
          {leftName}
        </ToggleButton>
        <ToggleButton value={rightName} selected={selected}>
          {rightName}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
