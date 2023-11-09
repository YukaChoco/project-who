import styles from '@/styles/SecondaryButton.module.css'
import { Button } from '@mui/material'

interface SecondaryButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function SecondaryButton({
  text = '',
  disabled = false,
  onClick = () => { },
}: SecondaryButtonProps) {
  return (
    <>
      <Button
        variant="outlined"
        className={styles.SecondaryButton}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  )
}
