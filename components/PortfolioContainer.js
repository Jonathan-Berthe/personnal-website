import styles from '../styles/PortfolioContainer.module.scss'

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import PortfolioItem from './PortfolioItem'

import datasPortfolio from '../public/dataPortfolio'
import MobileSVG from '../public/mobile.svg'
import DesktopSVG from '../public/desktop.svg'

export default function PortfolioContainer({ title }) {

    const listOfProjects = datasPortfolio.filter(e => e.type === title)
    const nbrOfProjects = listOfProjects.length

    const handleClick = (e) => {

        // Determine the position in the carrousel of the element by parsing his classname
        const listOfClassName = e.target.classList
        let posIndexOfElem = 0
        for (const className of listOfClassName) {
            const posPosition = className.indexOf('pos')

            // className is witch one with 'pos' substring inside
            if (posPosition > -1) {
                posIndexOfElem = parseInt(className.substring(posPosition + 3, posPosition + 4))
                break
            }
        }

        // If we click to move the carrousel
        if (posIndexOfElem === 1 || posIndexOfElem === 3) {
            const previousElem = Array.from(Array(nbrOfProjects).keys()).map((i) => (
                document.querySelectorAll(`.${title}.${styles[`pos${i + 1}`]}`)[0]
            ))
            previousElem.forEach((elem, i) => {
                elem.classList.remove(styles[`pos${i + 1}`])
            })

            // if we clicking on the left element of the carrousel => right shift of all elements
            if (posIndexOfElem === 1) {
                for (let i = 0; i < previousElem.length - 1; i++) {
                    previousElem[i].classList.add(styles[`pos${i + 2}`])
                }
                previousElem[previousElem.length - 1].classList.add(styles.pos1)

            }
            // if we clicking on the right element of the carrousel => left shift of all elements
            else if (posIndexOfElem === 3) {
                for (let i = previousElem.length - 1; i > 0; i--) {
                    previousElem[i].classList.add(styles[`pos${i}`])
                }
                previousElem[0].classList.add(styles[`pos${previousElem.length}`])
            }

        }

    }

    return (
        <Controller >
            <Scene triggerHook={0.5} duration={0} reverse={false}>
                <Tween from={{ x: title === 'Web' ? -1500 : 1500 }} to={{ x: 0 }}>
                    <div className={`${styles.portfolioContainer}`}>
                        <div className={styles.spacer1}></div>
                        {title === 'Web' && (
                            <>
                                <div className={styles.titleContainer}>
                                    <DesktopSVG className={styles.svg} />
                                    <h2 className={styles.h2}>Web</h2>
                                </div>
                                <div className={styles.spacer3}></div>
                            </>
                        )}
                        <div className={styles.projectsContainer}>
                            {
                                listOfProjects.map((projectData, i) => {
                                    return (
                                        <div key={i} onClick={handleClick} className={`${title} ${styles.project} ${styles[`pos${i + 1}`]}`}>
                                            <PortfolioItem data={projectData} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {title === 'App' && (
                            <>
                                <div className={styles.spacer3}></div>
                                <div className={styles.titleContainer}>
                                    <MobileSVG className={styles.svg} />
                                    <h2 className={styles.h2}>Mobile</h2>
                                </div>
                            </>
                        )}
                        <div className={styles.spacer1}></div>
                    </div >
                </Tween>
            </Scene>
        </Controller >
    )
}