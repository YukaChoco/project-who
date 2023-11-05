import styles from '@/styles/SecondaryButton.module.css'
import { Button } from '@mui/material'

interface Props {
    text: string;
    onClick?: () => void;
}

export default function SecondaryButton(props: Props) {
  return (
    <>
        <Button variant="outlined" className={styles.SecondaryButton} onClick={props.onClick}>{props.text}</Button>
    </>
  )
}
