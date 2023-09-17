// Detailsっていう型つくったからImportしてpropsにあてて
import { Details } from '@/types/Details'
import styles from '@/styles/DisplayText.module.css'

export default function DisplayText(props: Details) {
  return (
    <div className={styles.DisplayText_background}>
      <div className={styles.DisplayText_title}>
        <p>{props.title}</p>
      </div>
      <div className={styles.DisplayText_detail}>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}
