import styles from '../styles/Home.module.scss'
import Pulse from '../components/SansLibrary/Pulse/Pulse';
import Shake from '../components/SansLibrary/Shake/Shake';
import Spin from '../components/SansLibrary/Spin/Spin';
import Bounce from '../components/SansLibrary/Bounce/Bounce';
import Ping from '../components/SansLibrary/Ping/Ping';
import Rotate from '../components/Gsap/Rotate/Rotate';
import Translate from '../components/Gsap/Translate/Translate';
import Ease from '../components/Gsap/Ease/Ease';
import Transform from '../components/Gsap/Transform/Transform';
import From from '../components/Gsap/From/From';
import FromTo from '../components/Gsap/FromTo/FromTo';
import AllAtOnce from '../components/Gsap/AllAtOnce/AllAtOnce';

export default function Home() {
  return (
    <section className={styles.app}>
      <h2>Library-less Animations</h2>
      <Pulse />
      <Shake />
      <Spin />
      <Bounce />
      <Ping />
      <h2>GSAP</h2>
      <Rotate />
      <Translate />
      <Ease />
      <Transform />
      <From />
      <FromTo />
      <AllAtOnce />
    </section>
  )
}
