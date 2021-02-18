import styles from '../styles/Section1.module.scss'
import Image from 'next/image'

export default function Section1() {
    return (
        <div className={styles.section1 + ' section'} >
        <div className={styles.section1Content}>
          <div className={styles.titleContainer}>
            <h1>Jonathan Berthe</h1>
            <h2>Frontend developer</h2>
          </div>
          <div className={styles.spacer2}></div>
          <div className={styles.portraitContainer}> 
            <div className={styles.imgContainer}>
              <Image
                src="/../public/me.jpg"
                alt="Picture of the author"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.decoContainer} ${styles.decoContainer1}`}>
            <Image
                src="/../public/carbon.png"
                alt="code"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className={`${styles.decoContainer} ${styles.decoContainer2}`}>
            <Image
                src="/../public/carbon2.png"
                alt="code"
                layout='fill'
                objectFit='cover'
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