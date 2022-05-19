import styles from './Rectangle.module.scss';

export default function Rectangle({ color }) {
  return <div className={styles.rect} style={{backgroundColor: color}}></div>
}
