import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import * as React from 'react';

export default function ShareButton() {
  return (
    <Link href={'/share/selecting'}>
      <IconButton
        size='large'
        sx={{
          position: 'fixed',
          bottom: 40,
          right: 40,
          background: '#6F80BF',
          color: 'white',
          border: '1px solid white',
          ':hover': { background: '#6F80BF' },
        }}
      >
        <ShareOutlinedIcon fontSize='large' />
      </IconButton>
    </Link>
  );
}
