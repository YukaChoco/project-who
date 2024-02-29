import { Button } from '@mui/material';

interface PrimaryButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function DeleteButton({ text = '', disabled = false, onClick = () => {} }: PrimaryButtonProps) {
  const buttonStyle = {
    display: 'inline-block',
    width: '100%',
    fontSize: '1.125rem',
    border: '1.5px solid red',
    borderRadius: '45px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#FFE3E3',
    },
  };
  return (
    <Button variant='outlined' color='error' sx={buttonStyle} disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
}
