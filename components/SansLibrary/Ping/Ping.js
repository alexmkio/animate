import styles from './Ping.module.scss';

export default function Ping() {
  return (
    <>
      <h3>Ping</h3>
      <span className={styles.ping}>
        <button>Ping</button>
        <span>
          <span className={styles.animation}></span>
          <span className={styles.dot}></span>
        </span>
      </span>
    </>
  );
}