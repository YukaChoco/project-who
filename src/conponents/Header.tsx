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

interface Props {
  onClick_search?: () => void;
  onClick_menu?: () => void;
  onClick_edit?: () => void;
  onClick_register?: () => void;
}

export default function Header(props: Props) {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }} className={styles.Header_container}>
      <AppBar position="static" className={styles.Header_bar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="./">Who!</a>
          </Typography>
          {/* 1.検索アイコン */}
          {
            (props.onClick_search != null) &&
            <IconButton
              size="large"
              color="inherit"
              className={styles.Header_icon}
              onClick={props.onClick_search}
            >
              <SearchIcon />
            </IconButton>
          }

          {/* 2.メニューアイコン */}
          {
            (props.onClick_menu != null) &&
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.Header_icon}
            onClick={props.onClick_menu}
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
