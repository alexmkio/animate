import styles from './Bounce.module.scss';

export default function Bounce() {
  return (
    <>
      <h3>Bounce</h3>
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.bounce} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </>
  );
}
