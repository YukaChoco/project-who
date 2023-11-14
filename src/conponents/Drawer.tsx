import * as React from 'react';
import { Box, SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

type Anchor = 'right';

export default function Drawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const drawerStyle = {
    backgroundColor: '#3A3737',
    height: '100vh',
    opacity: '0.8',
  };
  const itemModules = {
    color: 'white',
    borderBottom: '1px solid white',
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List sx={drawerStyle}>
        <ListItem key={'自分の名刺'} disablePadding>
          <ListItemButton>
            <Link href='/make/mycard'>
              <ListItemText primary={'自分の名刺'} sx={itemModules} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'アカウントメモの追加'} disablePadding>
          <ListItemButton>
            <Link href='/make/card'>
              <ListItemText primary={'アカウントメモの追加'} sx={itemModules} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'￥Up grade'} disablePadding>
          <ListItemButton>
            <Link href='/upgrade'>
              <ListItemText primary={'￥Up grade'} sx={itemModules} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} size='large' edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
