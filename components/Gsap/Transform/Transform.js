import styles from './Transform.module.scss';
import { gsap } from "gsap";
import { useEffect, useState, useRef } from 'react'

const blueCircle = {
  color: "blue",
  radius: "50%",
  border: "5px solid red",
  width: "50px"
}

const greenRect = {
  color: "green",
  radius: "8px",
  border: "none",
  width: "100px"
}

export default function Transform() {
  const [state, setState] = useState(greenRect);
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 2,
      backgroundColor: state.color,
      borderRadius: state.radius,
      border: state.border,
      width: state.width });
  }, [state]);

  const handleClick = () => {
    state.color === "green" ? setState(blueCircle) : setState(greenRect)
  }

  return (
    <>
      <h3>Transform</h3>
      <div ref={boxRef} onClick={handleClick} className={styles.transform}></div>
    </>
  );
}
