import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  const offsetCalculate = (posRelX, posRelY, max) => {
    let offsetXMax = 0
    if (posRelY <= 0.5) offsetXMax = max * 2 * posRelY
    else if (posRelY >= 0.5 && posRelY < 1) offsetXMax = max * 2 - max * 2 * posRelY
    else if (posRelY >= 1) offsetXMax = 0

    let offsetX = 0
    if (posRelX <= 0.5) offsetX = -2 * offsetXMax * posRelX
    else if (posRelX >= 0.5 && posRelX < 1) offsetX = -2 * offsetXMax + 2 * offsetXMax * posRelX
    else if (posRelX >= 1) offsetX = 0

    return offsetX
  }

  // Parallax effect
  const onMouseMove = event => {
    const rect = event.target.getBoundingClientRect()
    const posRelX = (event.clientX - rect.left) / rect.width
    const posRelY = (event.clientY - rect.top) / rect.height

    const offsetX = offsetCalculate(posRelX, posRelY, 35)
    const offsetY = offsetCalculate(posRelY, posRelX, 35)
    const scaleFact = 1 - offsetCalculate(posRelX, posRelY, 0.13)

    document.getElementsByClassName(styles.imgContainer)[0].style.transform = `translate(${offsetX}%,0%) scale(${scaleFact})`
    document.getElementsByClassName(styles.decoContainer1)[0].style.transform = `translate(${-offsetX}%, ${offsetY}%) scale(${scaleFact}`
    document.getElementsByClassName(styles.decoContainer2)[0].style.transform = `translate(${2 * offsetX}%, ${-offsetY}%) scale(${scaleFact}`
  }

  useEffect(() => {



  }, [])

  return (
    <Layout>
      <div className={styles.section1 + ' section'} >
        <div className={styles.section1Content}>
          <div className={styles.titleContainer}>
            <h1 className={styles.h1}>Jonathan Berthe</h1>
            <h2 className={styles.h2}>Frontend developer</h2>
            {/* <h2 className={styles.h2}>Civil Engineer</h2> */}
          </div>
          <div className={styles.spacer2}></div>
          <div className={styles.portraitContainer}>  {/* onMouseMove={onMouseMove}> */}
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
      <div className="section section2"></div>
    </Layout>
  )
}
