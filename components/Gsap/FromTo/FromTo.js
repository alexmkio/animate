import styles from './FromTo.module.scss';
import { gsap } from "gsap";
import { useEffect, useState, useRef } from 'react'

export default function FromTo() {
  const [state, setState] = useState(true);
  const boxRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { x: 300, scale: 0.3, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 2 }
    );
  }, [state]);

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      <h3>FromTo</h3>
      <div className={styles.fromTo} ref={boxRef} onClick={handleClick}></div>
    </>
  );
}
