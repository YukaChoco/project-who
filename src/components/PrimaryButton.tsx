import { Button } from '@mui/material';

interface PrimaryButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({ text = '', disabled = false, onClick = () => {} }: PrimaryButtonProps) {
  const buttonStyle = {
    display: 'inline-block',
    width: '100%',
    backgroundColor: '#fff',
    fontSize: '1.125rem',
    border: '1.5px solid #969696',
    borderRadius: '45px',
    color: '#6F80BF',
    textDecoration: 'none',
    ':hover': {
      border: '1.5px solid #969696',
      backgroundColor: '#DCDBE8',
    },
    ':disabled': {
      color: '#FFF',
      backgroundColor: '#C7C7C7',
    },
  };
  return (
    <Button variant='outlined' sx={buttonStyle} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
}
