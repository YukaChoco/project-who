import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { ToggleButtonProps } from '@mui/material/ToggleButton';
import { useState } from 'react';
import * as React from 'react';

interface SwitchButtonProps {
  leftName: string;
  rightName: string;
  value: string;
  onChange?: ToggleButtonProps['onChange'];
}

export default function SwitchButton({ leftName = '', rightName = '', value = '', onChange = () => {} }: SwitchButtonProps) {
  const [selected, setSelected] = useState<boolean>(false);

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
        <ToggleButton
          value={leftName}
          selected={!selected}
          onClick={() => {
            setSelected(false);
          }}
        >
          {leftName}
        </ToggleButton>
        <ToggleButton
          value={rightName}
          onClick={() => {
            setSelected(true);
          }}
          selected={selected}
        >
          {rightName}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
