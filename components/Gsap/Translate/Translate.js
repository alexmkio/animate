import { gsap } from "gsap";
import { useEffect, useState, useRef } from 'react'
import Rectangle from '../../Rectangle/Rectangle'

export default function Translate() {
  const [state, setState] = useState(300);
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { duration: 2, x: state });
  }, [state]);

  const handleClick = () => {
    state === 300 ? setState(0) : setState(300)
  }

  return (
    <>
      <h3>Translate x</h3>
      <div ref={boxRef} onClick={handleClick}>
        <Rectangle color={"red"} />
      </div>
    </>
  );
}
