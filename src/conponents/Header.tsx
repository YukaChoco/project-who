/* eslint-disable @next/next/no-page-custom-font */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Head from 'next/head';
import Drawer from '@/conponents/Drawer'
import Link from 'next/link'

interface Props {
  useSearchIcon?: boolean;
  useMenuIcon?: boolean;
  onClick_edit?: () => void;
  onClick_register?: () => void;
}

export default function Header(props: Props) {
  const barStyle = {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    flexGrow: 1,
    backgroundColor: '#6F80BF',
    height: '58px',
  }
  const titleStyle = {
    fontFamily: "'Lemon', serif",
    flexGrow: 1,
  }
  const iconStyle = {
    margin: '0 3px 0 0',
  }

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet" />
      </Head>

      <AppBar position="static" sx={barStyle}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={titleStyle}>
            <Link href="/cards">Who!</Link>
          </Typography>
          {
            (props.useSearchIcon) &&
            <IconButton
              size="large"
              color="inherit"
              sx={iconStyle}
            >
              <Link href="/upgrade"><SearchIcon /></Link>
            </IconButton>
          }

          {
            (props.useMenuIcon) &&
            <><Drawer /></>
          }

          {
            (props.onClick_edit != null) &&
            <Button color="inherit" onClick={props.onClick_edit}>編集完了</Button>
          }

          {
            (props.onClick_register != null) &&
            <Button color="inherit" onClick={props.onClick_register}>登録</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
