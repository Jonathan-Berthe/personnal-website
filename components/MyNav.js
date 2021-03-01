import styles from "../styles/MyNav.module.scss"
import { useEffect, useState, createRef } from "react"


import { debounce } from 'lodash'

import GitSVG from '../public/github.svg'
import LinkedinSVG from '../public/linkedin.svg'
import UpSvg from '../public/chevron-up2.svg'
import DownSvg from '../public/chevron-down.svg'

export default function MyNav() {

    const [currentSection, setCurrentSection] = useState(1)

    useEffect(() => {
        document.addEventListener('scroll', debounce(() => {
            const scrollY = window.scrollY
            const navElem = document.getElementsByClassName(styles.navContainer)[0]
            if (scrollY > 15) navElem.classList.add(styles.active)
            else navElem.classList.remove(styles.active)

            const listOfSections = [...document.querySelectorAll('.section')]
            // On veut que ca passe à la section suivante dans la nav quand on dépasse les 80% de la section
            const topValues = listOfSections.map((e) => e.offsetTop)
            const heightValues = listOfSections.map((e) => e.offsetHeight)
            const topScrollValues = topValues.map((e, i) => (e - 0.2 * heightValues[i]))
            for (let i = 0; i < topScrollValues.length - 1; i++) {
                if (scrollY >= topScrollValues[i] && scrollY < topScrollValues[i + 1]) {
                    setCurrentSection(i + 1)
                }
            }
            if (scrollY >= topScrollValues[topScrollValues.length - 1]) {
                setCurrentSection(topScrollValues.length)
            }

        }, 10, { leading: true, trailing: false }))
    }, [])

    const handleLinkClick = (e) => {
        
        e.preventDefault()
        const targetSectionId = e.target.children[0].getAttribute("href")
        toSectionId(targetSectionId)
    }

    const handleDownClick = () => {
        const currentSectionTop = document.querySelector(`#section${currentSection}`).offsetTop
        const currentSectionHeight = document.querySelector(`#section${currentSection}`).offsetHeight
        const navbarHeight = document.getElementsByClassName(styles.navContainer)[0].offsetHeight
        if (currentSection === 2 && window.scrollY < (currentSectionTop - navbarHeight + 1 + currentSectionHeight * 0.4)) {
            window.scroll({ top: currentSectionTop - navbarHeight + 1 + currentSectionHeight / 2, behavior: 'smooth' });
            return
        }
        toSectionId(`#section${currentSection + 1}`)
    }

    const toSectionId = targetSectionId => {
        if (document.querySelector(targetSectionId) === null) return
        const targetSectionTop = document.querySelector(targetSectionId).offsetTop
        const navbarHeight = document.getElementsByClassName(styles.navContainer)[0].offsetHeight
        window.scroll({ top: targetSectionTop - navbarHeight + 1, behavior: 'smooth' });
    }

    return (
        <>
            <nav className={styles.navContainer}>
                <div className={styles.spacer6}></div>
                <div className={styles.logoContainer}></div>
                <ul>
                    {
                        ['About Me', 'Portfolio'].map((content, index) => {
                            return <li key={index} onClick={handleLinkClick} className={styles.navSection + ' ' + ((index + 1 === currentSection) ? styles.active : '')}> <a href={`#section${index + 1}`} >{content}</a></li>
                        })
                    }
                    {/* <li className={'active'}> <a href="#section1" onClick={handleLinkClick}>About Me {currentSection}</a> </li>
                <li> <a href="#section2" onClick={handleLinkClick}>Portfolio</a></li> */}


                    <li className={styles.navSection + ' ' + styles.contactMe + ' ' + ((currentSection === 3) ? styles.active : '')} onClick={handleLinkClick}><a href="#section3">Contact me</a></li>
                    <li className={styles.logo}>
                        <a href="https://www.github.com/Jonathan-Berthe/" target="_blank"> <GitSVG className={styles.svg} /> </a>
                    </li>
                    <li className={styles.logo}>
                        <a href="https://www.linkedin.com/in/jonathan-berthe-1a3aa294" target="_blank"> <LinkedinSVG className={styles.svg} /> </a>
                    </li>
                </ul>
                <div className={styles.spacer1}></div>
            </nav>
            {currentSection > 1 && <div className={styles.topArrow} onClick={handleLinkClick}>
                <a href="#section1" target="_blank"> <UpSvg className={styles.svg} /> </a>
            </div>}
            {currentSection < 3 && <div className={styles.downArrow} onClick={handleDownClick}>
                <DownSvg className={styles.svg} />
            </div>}
        </>
    )
}