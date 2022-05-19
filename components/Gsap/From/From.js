import styles from './From.module.scss';
import { gsap } from "gsap";
import { useEffect, useState, useRef } from 'react'

export default function From() {
  const [state, setState] = useState(true);
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, { duration: 2, scale: 0.3, opacity: 0, ease: "back" });
  }, [state]);

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      <h3>From</h3>
      <div className={styles.from} ref={boxRef} onClick={handleClick}></div>
    </>
  );
}
