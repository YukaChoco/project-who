import styles from '@/styles/loading.module.css';

export default function Loading() {
  return (
    <>
      <div className={styles.alldisplay}></div>
      <div className={styles.wrapper}>
        <div className={styles.circle}>
          <p>W</p>
        </div>
        <div className={styles.circle}>
          <p>h</p>
        </div>
        <div className={styles.circle}>
          <p>o</p>
        </div>
        <div className={styles.circle}>
          <p>!</p>
        </div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <span>Loading</span>
      </div>
    </>
  );
}
