import styles from '@/styles/PrimaryButton.module.css'
import { Button } from '@mui/material'

interface PrimaryButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({
  text = '',
  disabled = false,
  onClick = () => { },
}: PrimaryButtonProps) {
  return (
    <>
      <Button
        variant="outlined"
        className={styles.PrimaryButton}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    </>
  )
}