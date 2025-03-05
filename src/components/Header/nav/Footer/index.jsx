import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../../../common/RoundedButton';
import Magnetic from '../../../../common/Magnetic';
import { usePathname } from 'next/navigation';

export default function index() {
  return (
    <>
    <div className={styles.footer}>
      <Magnetic>
        <div className={styles.el}>
        <a href='https://www.linkedin.com/in/ashik-benny/' target='_blank'>LinkedIn</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
      {/* <Magnetic>
        <div className={styles.el}>
        <a href='https://github.com/ashBenny' target='_blank'>GitHub</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic> */}
      <Magnetic>
        <div className={styles.el}>
        <a href='https://drive.google.com/file/d/1RVNAsZ936k-qE1gcOmQu6iwuSQ8_CZeH/view?usp=sharing' target='_blank'>Resume</a>
        <div className={styles.indicator}></div>
        </div>
      </Magnetic>
    </div>
    </>
  )
}
