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



export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.Header_container}>
      <AppBar position="static" className={styles.Header_bar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Who!
          </Typography>
          {/* 1.検索とメニューアイコン */}
          {/* <IconButton size="large" color="inherit" className={styles.Header_icon}><SearchIcon /></IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.Header_icon}
          >
            <MenuIcon />
          </IconButton> */}


        {/* 2.メニューアイコンのみ */}
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.Header_icon}
          >
            <MenuIcon />
          </IconButton> */}


          {/* 3.編集完了 */}
          {/* <Button color="inherit">編集完了</Button> */}


          {/* 4.登録 */}
          {/* <Button color="inherit">登録</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
