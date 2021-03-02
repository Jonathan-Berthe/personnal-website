import styles from '../styles/PortfolioContainer.module.scss'

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import { useSwipeable } from "react-swipeable";



import PortfolioItem from './PortfolioItem'

import datasPortfolio from '../public/dataPortfolio'
import MobileSVG from '../public/mobile.svg'
import MobileSVGBig from '../public/mobileBig.svg'
import MobileSVGBigRed from '../public/mobileBigRed.svg'

import DesktopSVG from '../public/desktop.svg'
import DesktopSVGBig from '../public/desktopBig.svg'

export default function PortfolioContainer({ title }) {

    const listOfProjects = datasPortfolio.filter(e => e.type === title)
    const nbrOfProjects = listOfProjects.length

    const findPos = (divElem) => {
        const listOfClassName = divElem.classList
        let posIndexOfElem = 0
        for (const className of listOfClassName) {
            const posPosition = className.indexOf('pos')

            // className is witch one with 'pos' substring inside
            if (posPosition > -1) {
                posIndexOfElem = parseInt(className.substring(posPosition + 3, posPosition + 4))
                break
            }
        }
        return posIndexOfElem
    }

    // posIndexOfElem is the index of the element wich will become the front element
    const turnCarrousel = (posIndexOfElem) => {
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

    /// EVENT HANDLERS ///

    const handleClick = (eData) => {
        console.log(eData)
        // Determine the position in the carrousel of the element by parsing his classname
        const posIndexOfElem = findPos(eData.event.target)
        // If we click to move the carrousel
        turnCarrousel(posIndexOfElem)
    }

    const handleLeftSwipe = (eData) => {
        console.log('left')
        const posIndexOfElem = findPos(eData.event.target)
        console.log(posIndexOfElem)
        if (posIndexOfElem !== 2) return
        turnCarrousel(3)
    }

    const handleRightSwipe = (eData) => {
        console.log('right')
        const posIndexOfElem = findPos(eData.event.target)
        console.log(posIndexOfElem)
        if (posIndexOfElem !== 2) return
        turnCarrousel(1)
    }

    const eventsHandlers = useSwipeable({
        onSwipedLeft: handleLeftSwipe,
        onSwipedRight: handleRightSwipe,
        onTap: handleClick,
        preventDefaultTouchmoveEvent: false,
        trackMouse: true,
        trackTouch: false,                     // track touch input
        delta: 5,
    })


    return (
        <Controller >
            <Scene triggerHook={0.5} duration={0} reverse={false}>
                <Tween from={{ x: title === 'Web' ? -1500 : 1500 }} to={{ x: 0 }}>
                    <div className={styles.portfolioContainer + ' ' + (title === 'Web' ? styles.web : styles.app)}>
                        <div className={styles.spacer1}></div>
                        {title === 'Web' && (
                            <>
                                <div className={styles.titleContainer}>
                                    <DesktopSVGBig className={styles.svg} />
                                    <h2 className={styles.h2}>Web</h2>
                                </div>
                                <div className={styles.spacer4}></div>
                            </>
                        )}
                        <div className={styles.projectsContainer}>
                            {
                                listOfProjects.map((projectData, i) => {
                                    return (
                                        <div key={i}  {...eventsHandlers} className={`${title} ${styles.project} ${styles[`pos${i + 1}`]}`}>
                                            <PortfolioItem data={projectData} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {title === 'App' && (
                            <>
                                <div className={styles.spacer4}></div>
                                <div className={styles.titleContainer}>
                                    <MobileSVGBigRed className={styles.svg} />
                                    <h2 className={styles.h2}>Mobile (Flutter)</h2>
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