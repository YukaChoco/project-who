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
  useSearchIcon?:  boolean;
}

export default function Header(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.Header_container}>
      <AppBar position="static" className={styles.Header_bar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Who!
          </Typography>
          {/* 1.検索とメニューアイコン */}
          {
            (props.onClick_search !== null) &&
            <IconButton
              size="large"
              color="inherit"
              className={styles.Header_icon}
              onClick={props.onClick_search}
            >
              <SearchIcon />
            </IconButton>
          }

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


          {/* 2.メニューアイコンのみ */}
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.Header_icon}
            onClick={props.onClick_menu}
          >
            <MenuIcon />
          </IconButton> */}


          {/* 3.編集完了 */}
          {/* <Button color="inherit" onClick={props.onClick_edit}>編集完了</Button> */}


          {/* 4.登録 */}
          {/* <Button color="inherit" onClick={props.onClick_register}>登録</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
