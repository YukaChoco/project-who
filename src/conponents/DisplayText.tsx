import { Details } from '@/types/Details'
import styles from '@/styles/DisplayText.module.css'
import Link from 'next/link'

interface Props extends Details {
  isSNSId?: boolean;
}

export default function DisplayText(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{props.title}</p>
      </div>
      <div className={styles.detail}>
        {props.isSNSId && '@'}
        {
          props.url
            ?
            <Link href={props.url}>{props.detail}</Link>
            :
            <span>{props.detail}</span>
        }
      </div>
    </div >
  )
}
