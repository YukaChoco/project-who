import { Button } from '@mui/material';

interface SecondaryButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  isSubmit?: boolean;
}

export default function SecondaryButton({ text = '', disabled = false, onClick = () => {}, isSubmit = false }: SecondaryButtonProps) {
  const buttonStyle = {
    display: 'inline-block',
    width: '100%',
    fontSize: '1.125rem',
    border: '1.5px solid #969696',
    borderRadius: '45px',
    color: '#fff',
    backgroundColor: '#6F80BF',
    textDecoration: 'none',
    ':hover': {
      border: '1.5px solid #969696',
      backgroundColor: '#505D8B',
    },
    ':disabled': {
      color: '#FFF',
      backgroundColor: '#C7C7C7',
    },
  };
  return (
    <Button variant='outlined' sx={buttonStyle} disabled={disabled} onClick={onClick} type={isSubmit ? 'submit' : 'button'}>
      {text}
    </Button>
  );
}
