import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/styles/Header.module.css'
import Head from 'next/head';

interface Props {
  useSearchIcon?: boolean;
  useMenuIcon?: boolean;
  onClick_edit?: () => void;
  onClick_register?: () => void;
}

export default function Header(props: Props) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&family=Lemon&display=swap" rel="stylesheet" />
      </Head>

      <Box sx={{ flexGrow: 1 }} className={styles.Header_container}>
        <AppBar position="static" className={styles.Header_bar} sx={{ height: '58px' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="http://localhost:3000/cards" className={styles.font}>Who!</a>
            </Typography>
            {/* 1.検索アイコン */}
            {
              (props.useSearchIcon) &&
              <IconButton
                size="large"
                color="inherit"
                className={styles.Header_icon}
              >
                <a href="http://localhost:3000/upgrade"><SearchIcon /></a>
              </IconButton>
            }

            {/* 2.メニューアイコン */}
            {
              (props.useMenuIcon) &&
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                className={styles.Header_icon}
                onClick={() => console.log('menuBtn Clicked')}
              >
                <MenuIcon />
              </IconButton>
            }

            {/* 3.編集完了ボタン */}
            {
              (props.onClick_edit != null) &&
              <Button color="inherit" onClick={props.onClick_edit}>編集完了</Button>
            }

            {/* 4.登録ボタン */}
            {
              (props.onClick_register != null) &&
              <Button color="inherit" onClick={props.onClick_register}>登録</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
      <div className={styles.Header_margin}></div>
    </div>
  );
}
