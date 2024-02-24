import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { Button } from '@mui/material';

export default function PageTopBackButton() {
  const buttonStyle = {
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
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button sx={buttonStyle} onClick={returnTop}>
      <VerticalAlignTopIcon fontSize='large' />
    </Button>
  );
}
