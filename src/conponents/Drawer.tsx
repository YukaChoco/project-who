import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import styles from '@/styles/Drawer.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

type Anchor = 'right';


export default function Drawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.drawer}>
          <ListItem key={'名刺の作成'} disablePadding>
            <ListItemButton>
            <Link href="/make/mycard"><ListItemText primary={'　名刺の作成　　　　　　'} className={styles.drawer_item} /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={'アカウントメモの追加'} disablePadding>
            <ListItemButton>
            <Link href="/make/card"><ListItemText primary={'　アカウントメモの追加　'} className={styles.drawer_item} /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={'￥Up grade'} disablePadding>
            <ListItemButton>
            <Link href="/upgrade"><ListItemText primary={'　￥Up grade　　　　　　'} className={styles.drawer_item} /></Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor} >
          <IconButton
          onClick={toggleDrawer(anchor, true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                className={styles.Header_icon}
                // onClick={() => console.log('menuBtn Clicked')}
              >
                <MenuIcon />
              </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}