import { Details } from '@/types/Details'
import styles from '@/styles/DisplayText.module.css'
import Link from 'next/link'



export default function DisplayText(props: Details) {
  return (
    <div className={styles.DisplayText_background}>
      <div className={styles.DisplayText_title}>
        <p>{props.title}</p>
      </div>
      <div className={styles.DisplayText_detail}>
        <Link href={props.url || '/'}>{props.detail}</Link>
      </div>
    </div>
  )
}
