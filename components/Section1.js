import styles from '../styles/Section1.module.scss'
import Image from 'next/image'

import LinkSVG from '../public/link.svg'

export default function Section1() {

  const handleClick = () => {
    window.open('/CV_Berthe.pdf')
  }
  return (
    <div className={styles.section1 + ' section'} id='section1'>
      <div className={styles.section1Content}>
        <div className={styles.titleContainer}>
          <h1>Jonathan Berthe</h1>
          <h2>Front-end developer &amp; Engineer</h2>
          <p className={styles.description}>
            I'm a junior front-end developer looking for new opportunities in Web devlopement (especially with React, but not only) and/or cross-platform mobile development with Flutter !
          </p>
          <div className={styles.cvContainer} onClick={handleClick}>
            <LinkSVG className={styles.cvSvg}>

            </LinkSVG>
            <p>
              View my resume
            </p>
          </div>
        </div>
        <div className={styles.spacer2}></div>
        <div className={styles.portraitContainer}>
          <div className={styles.imgContainer}>
            <Image
              src="/images/me.jpg"
              alt="Picture of the author"
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
          <div className={`${styles.decoContainer} ${styles.decoContainer1}`}>
            <Image
              src="/images/carbon.png"
              alt="code"
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
          <div className={`${styles.decoContainer} ${styles.decoContainer2}`}>
            <Image
              src="/images/carbon2.png"
              alt="code"
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>
        </div>
        <div className={styles.spacer4}></div>
      </div>
      <div className={styles.cercleBeigeBottom}>

      </div>
    </div>
  )
}