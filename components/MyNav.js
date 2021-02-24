import styles from "../styles/MyNav.module.scss"
import { useEffect, useState, createRef } from "react"


import { debounce } from 'lodash'

import GitSVG from '../public/github.svg'
import LinkedinSVG from '../public/linkedin.svg'


export default function MyNav() {

    const [currentSection, setCurrentSection] = useState(1)
    /* const sectionRef = createRef(); // Pour avoir accès a la variable mis a jour depuis useEffect
    sectionRef.current = currentSection; */

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
            const topScrollValues = topValues.map((e,i) => (e - 0.2 * heightValues[i]))
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
        const targetSectionTop = document.querySelector(targetSectionId).offsetTop
        const navbarHeight = document.getElementsByClassName(styles.navContainer)[0].offsetHeight
        window.scroll({top: targetSectionTop - navbarHeight + 1, behavior: 'smooth'}); // because height of navbar is 65
        //targetSection.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={styles.navContainer}>
            <div className={styles.spacer6}></div>
            <div className={styles.logoContainer}></div>
            <ul>
                {
                    ['About Me', 'Portfolio'].map((content, index) => {
                        return <li key={index} onClick={handleLinkClick} className={styles.navSection + ' ' + ((index + 1 === currentSection) ? styles.active : '')}> <a href={`#section${index+1}`} >{content}</a></li>
                    })
                }
                {/* <li className={'active'}> <a href="#section1" onClick={handleLinkClick}>About Me {currentSection}</a> </li>
                <li> <a href="#section2" onClick={handleLinkClick}>Portfolio</a></li> */}

                <li className={styles.logo}>
                    <a href="https://www.github.com/Jonathan-Berthe/" target="_blank"> <GitSVG className={styles.svg} /> </a>
                </li>
                <li className={styles.logo}>
                    <a href="https://www.linkedin.com/in/jonathan-berthe-1a3aa294" target="_blank"> <LinkedinSVG className={styles.svg} /> </a>
                </li>
                <li className={styles.contactMe}><a href="mailto:nullepart@mozilla.org">Contact me</a></li>
            </ul>
            <div className={styles.spacer1}></div>
        </nav>
    )
}