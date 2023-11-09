import { Button } from '@mui/material'

interface Props {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton(props: Props) {
  const buttonStyle = {
    display: 'inline-block',
    width: '100%',
    fontSize: '1.125rem',
    border: '1.5px solid #fff',
    borderRadius: '45px',
    color: '#fff',
    backgroundColor: ' #6F80BF',
    textDecoration: 'none',
    ':hover': {
      border: '1.5px solid #fff',
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  }
  return (
    <>
      <Button variant="outlined" sx={buttonStyle} onClick={props.onClick}>{props.text}</Button>
    </>
  )
}
