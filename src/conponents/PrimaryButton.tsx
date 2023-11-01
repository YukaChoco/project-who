import styles from '@/styles/PrimaryButton.module.css'
import { Button } from '@mui/material'

interface Props {
    text: string;
    onClick?: () => void;
}

export default function PrimaryButton(props: Props) {
  return (
    <>
        <Button variant="outlined" className={styles.PrimaryButton} onClick={props.onClick}>{props.text}</Button>
    </>
  )
}