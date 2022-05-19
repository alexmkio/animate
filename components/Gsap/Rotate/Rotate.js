import { gsap } from "gsap";
import { useEffect, useState, useRef } from 'react'
import Rectangle from '../../Rectangle/Rectangle'

export default function Rotate() {
  const [state, setState] = useState(true);
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { duration: 2, rotation: "+=360" });
  }, [state]);
  
  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      <h3>Rotate 360</h3>
      <div ref={boxRef} onClick={handleClick}>
        <Rectangle color={"blue"}/>
      </div>
    </>
  );
}
