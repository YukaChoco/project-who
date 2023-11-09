import { Button } from '@mui/material'

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  text = '',
  onClick = () => { },
}: PrimaryButtonProps) {
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
      border: '1.5px solid',
      backgroundColor: '#DCDBE8',
    },
  }
  return (
    <Button variant="outlined" sx={buttonStyle} onClick={onClick}>{text}</Button>
  )
}