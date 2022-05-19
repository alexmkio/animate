import styles from './AllAtOnce.module.scss';
import { gsap } from "gsap";
import { useEffect, useState, useRef } from 'react'

export default function AllAtOnce() {
  const [state, setState] = useState(true);
  const circle1 = useRef();
  const circle2 = useRef();
  const circle3 = useRef();
  const circle4 = useRef();

  useEffect(() => {
    const circles = [
      circle1.current,
      circle2.current,
      circle3.current,
      circle4.current,
    ]
    gsap.from(circles, { duration: 2, opacity: 0, y: 150 });
  }, [state]);

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      <h3>All At Once</h3>
      <div className={styles.container}>
        <div className={styles.circle} style={{backgroundColor: "blue"}} ref={circle1} onClick={handleClick}></div>
        <div className={styles.circle} style={{backgroundColor: "red"}} ref={circle2} onClick={handleClick}></div>
        <div className={styles.circle} style={{backgroundColor: "yellow"}} ref={circle3} onClick={handleClick}></div>
        <div className={styles.circle} style={{backgroundColor: "green"}} ref={circle4} onClick={handleClick}></div>
      </div>
    </>
  );
}
