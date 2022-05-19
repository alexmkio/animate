import styles from './Circle.module.scss';

export default function Circle({ color }) {
  return <div className={styles.circle} style={{backgroundColor: color}}></div>
}