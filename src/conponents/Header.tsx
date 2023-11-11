/* eslint-disable @next/next/no-page-custom-font */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import styles from '@/styles/Header.module.css'
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
  return (
    <>
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&family=Lemon&display=swap" rel="stylesheet" />
        </Head>

        <Box
          sx={{
            flexGrow: 1,
            width: '100%',  // Use string value for percentage
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >

          <AppBar
            position="static"
            sx={{
              height: '58px',
              backgroundColor: '#6F80BF'  // Use camelCase here
            }}
          >

            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  href="/cards"
                  style={{
                    fontFamily: "'Lemon', serif, cursive",
                  }}
                >
                  Who!
                </Link>


              </Typography>
              {
                (props.useSearchIcon) &&
                <IconButton
                  size="large"
                  color="inherit"
                  style={{
                    margin: '0 3px 0 0',
                  }}
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
        </Box>
        <div ></div>
      </div>
    </>
  );
}
