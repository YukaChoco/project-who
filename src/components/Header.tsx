/* eslint-disable @next/next/no-page-custom-font */
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { CARD_TYPE, CardType } from '@/types/CardType';

interface HeaderProps {
  cardType?: CardType;
  confirmPageChange?: boolean;
}

export default function Header({ cardType = 'none', confirmPageChange = false }: HeaderProps) {
  const barStyle = {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    flexGrow: 1,
    backgroundColor: '#6F80BF',
    height: '58px',
  };
  const titleStyle = {
    fontFamily: "'Lemon', serif",
    flexGrow: 1,
  };

  const router = useRouter();

  const onClickMyCardPageChange = () => {
    if (confirmPageChange) {
      if (window.confirm('編集を破棄して画面を移動しますか?')) {
        router.push('/mycards');
      }
    } else {
      router.push('/mycards');
    }
  };

  const onClickCardPageChange = () => {
    if (confirmPageChange) {
      if (window.confirm('編集を破棄して画面を移動しますか?')) {
        router.push('/cards');
      }
    } else {
      router.push('/cards');
    }
  };

  const onClickIconPageChange = () => {
    if (confirmPageChange) {
      if (window.confirm('編集を破棄して画面を移動しますか?')) {
        router.push('/cards');
      }
    } else {
      router.push('/cards');
    }
  };

  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Lemon&display=swap' rel='stylesheet' />
      </Head>

      <AppBar position='static' sx={barStyle}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={titleStyle} onClick={onClickIconPageChange}>
            Who!
          </Typography>

          <Button
            color='inherit'
            onClick={onClickMyCardPageChange}
            sx={{
              fontSize: '0.8125rem',
              fontFamily: "'Lemon'",
            }}
          >
            <Box
              sx={{
                lineHeight: '0.8125rem',
                boxShadow: cardType == CARD_TYPE.My ? '0px 4px 5px -5px white' : 'none',
                borderBottom: cardType == CARD_TYPE.My ? '1.5px solid white' : 'none',
              }}
            >
              自分の名刺
              <br />
              <span style={{ fontSize: '0.5rem', textTransform: 'lowercase' }}>my card</span>
            </Box>
          </Button>

          <Button
            color='inherit'
            onClick={onClickCardPageChange}
            sx={{
              fontSize: '0.8125rem',
              fontFamily: "'Lemon'",
            }}
          >
            <Box
              sx={{
                lineHeight: '0.8125rem',
                boxShadow: cardType == CARD_TYPE.Have ? '0px 4px 5px -5px white' : 'none',
                borderBottom: cardType == CARD_TYPE.Have ? '1.5px solid white' : 'none',
              }}
            >
              他人の名刺
              <br />
              <span style={{ fontSize: '0.5rem', textTransform: 'lowercase' }}>friend card</span>
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
