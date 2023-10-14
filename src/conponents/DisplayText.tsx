import { Details } from '@/types/Details'
import styles from '@/styles/DisplayText.module.css'
import Link from 'next/link'



export default function DisplayText(props: Details) {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <p>{props.title}</p>
      </div>
      <div className={styles.detail}>
        @<Link href={props.url || '/'}>{props.detail}</Link>
      </div>
    </div>
  )
}
