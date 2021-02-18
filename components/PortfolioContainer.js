import styles from '../styles/PortfolioContainer.module.scss'
import Image from 'next/image'


export default function PortfolioContainer({ title }) {

    const handleClick = (e) => {
        const listOfClassName = e.target.classList
        let posIndexOfElem = 0
        for (const className of listOfClassName) {
            const pos = className.indexOf('pos')
            if (pos > -1) {
                posIndexOfElem = parseInt(className.substring(pos + 3, pos + 4))
                break
            }
        }

        if (posIndexOfElem === 1 || posIndexOfElem === 3) {

            const previousElem1 = document.querySelectorAll(`.${title}.${styles.pos1}`)[0]
            const previousElem2 = document.querySelectorAll(`.${title}.${styles.pos2}`)[0]
            const previousElem3 = document.querySelectorAll(`.${title}.${styles.pos3}`)[0]
            const previousElem4 = document.querySelectorAll(`.${title}.${styles.pos4}`)[0]

            previousElem1.classList.remove(styles.pos1)
            previousElem2.classList.remove(styles.pos2)
            previousElem3.classList.remove(styles.pos3)
            previousElem4.classList.remove(styles.pos4)

            if (posIndexOfElem === 1) {
                previousElem1.classList.add(styles.pos2)
                previousElem2.classList.add(styles.pos3)
                previousElem3.classList.add(styles.pos4)
                previousElem4.classList.add(styles.pos1)
            }
            else if (posIndexOfElem === 3) {
                previousElem1.classList.add(styles.pos4)
                previousElem4.classList.add(styles.pos3)
                previousElem3.classList.add(styles.pos2)
                previousElem2.classList.add(styles.pos1)
            }

        }

    }

    return (

        <div className={`${styles.portfolioWebContainer} ${styles.portfolioContainer}`}>
            <h2>{title}</h2>
            <div className={styles.projectsContainer}>
                <div onClick={handleClick} className={`${title} ${styles.project} ${styles.pos1}`}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/../public/benjamin.png"
                            alt="Picture of the author"
                            layout="fill"
                            object-fit='contain'
                        />
                    </div>
                    <div className={styles.spacer1}></div>
                    <div className={styles.rowLogoContainer}>

                    </div>
                    <div className={styles.spacer1}></div>
                    <p className={styles.p}>Challenge of web integration from the youtuber Benjamin Code.</p>
                    <div className={styles.spacer8}></div>
                </div>
                <div onClick={handleClick} className={`${title} ${styles.project} ${styles.pos2}`}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/../public/benjamin.png"
                            alt="Picture of the author"
                            layout="fill"
                            object-fit='contain'
                        />
                    </div>
                    <div className={styles.spacer1}></div>
                    <div className={styles.rowLogoContainer}>

                    </div>
                    <div className={styles.spacer1}></div>
                    <p className={styles.p}>Challenge of web integration from the youtuber Benjamin Code.</p>
                    <div className={styles.spacer8}></div>
                </div>
                <div onClick={handleClick} className={`${title} ${styles.project} ${styles.pos3}`}>
                <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/../public/benjamin.png"
                            alt="Picture of the author"
                            layout="fill"
                            object-fit='contain'
                        /> 
                    </div>
                    <div className={styles.spacer1}></div>
                    <div className={styles.rowLogoContainer}>
                        
                    </div>
                    <div className={styles.spacer1}></div>
                    <p className={styles.p}>Challenge of web integration from the youtuber Benjamin Code.</p>
                    <div className={styles.spacer8}></div>
                </div>
                <div onClick={handleClick} className={`${title} ${styles.project} ${styles.pos4}`}>
                <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/../public/benjamin.png"
                            alt="Picture of the author"
                            layout="fill"
                            object-fit='contain'
                        /> 
                    </div>
                    <div className={styles.spacer1}></div>
                    <div className={styles.rowLogoContainer}>
                        
                    </div>
                    <div className={styles.spacer1}></div>
                    <p className={styles.p}>Challenge of web integration from the youtuber Benjamin Code.</p>
                    <div className={styles.spacer8}></div>
                </div>
            </div>
        </div >
    )
}