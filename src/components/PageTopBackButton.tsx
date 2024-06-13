import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

export default function PageTopBackButton() {
  const top = 38;

  const normalButtonStyle = {
    opacity: 0,
    pointerEvents: 'none',
  };

  const activeButtonStyle = {
    opacity: 1,
    transition: '0.5s',
    position: 'fixed',
    bottom: 38,
    right: 0,
    zIndex: '100',
    width: '65px',
    height: '65px',
    backgroundColor: 'rgb(0 0 0 / 50%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0',
    ':hover': {
      backgroundColor: '#333',
    },
  };

  const [show, setShow] = useState<boolean>(false);

  const changeShow = () => {
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', changeShow);
    return () => window.removeEventListener('scroll', changeShow);
  }, []);

  const style = show ? activeButtonStyle : normalButtonStyle;

  if (show) {
    return (
      <Button sx={style} onClick={returnTop}>
        <VerticalAlignTopIcon fontSize='large' />
      </Button>
    );
  }
}
