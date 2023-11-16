/* eslint-disable @next/next/no-page-custom-font */
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Drawer from '@/components/Drawer';

interface HeaderProps {
  useSearchIcon?: boolean;
  useMenuIcon?: boolean;
  onClick_edit?: () => void;
  onClick_register?: () => void;
}

export default function Header({ useSearchIcon = false, useMenuIcon = false, onClick_edit = undefined, onClick_register = undefined }: HeaderProps) {
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
  const iconStyle = {
    margin: '0 3px 0 0',
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
          <Typography variant='h6' component='div' sx={titleStyle}>
            <Link href='/cards'>Who!</Link>
          </Typography>
          {useSearchIcon && (
            <IconButton size='large' color='inherit' sx={iconStyle}>
              <Link href='/upgrade'>
                <SearchIcon />
              </Link>
            </IconButton>
          )}

          {useMenuIcon && <Drawer />}

          {onClick_edit !== undefined && (
            <Button color='inherit' onClick={onClick_edit}>
              編集完了
            </Button>
          )}

          {onClick_register !== undefined && (
            <Button color='inherit' onClick={onClick_register}>
              登録
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
