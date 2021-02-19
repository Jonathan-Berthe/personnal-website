import styles from "../styles/MyNav.module.scss"
import { useEffect } from "react"


import { debounce } from 'lodash'

import GitSVG from '../public/github.svg'
import LinkedinSVG from '../public/linkedin.svg'


export default function MyNav() {

    useEffect(() => {
        document.addEventListener('scroll', debounce(() => {
            const scrollY = window.scrollY
            const elem = document.getElementsByClassName(styles.navContainer)[0]
            if (scrollY > 10) elem.classList.add(styles.active)
            else elem.classList.remove(styles.active)
        }, 5, { leading: true, trailing: false }))
    }, [])

    return (
        <nav className={styles.navContainer}>
            <div className={styles.spacer6}></div>
            <div className={styles.logoContainer}></div>
            <ul>
                <li>About Me</li>
                {/* <li>CV</li> */}
                <li>Portfolio</li>
                <li className={styles.logo}>
                    <a href="https://www.github.com/Jonathan-Berthe/" target="_blank"> <GitSVG className={styles.svg} /> </a>
                </li>
                <li className={styles.logo}>
                    <a href="https://www.linkedin.com/in/jonathan-berthe-1a3aa294" target="_blank"> <LinkedinSVG className={styles.svg} /> </a>
                </li>
                <li className={styles.contactMe}><a href="mailto:jonath.berthe@gmail.com">Contact me</a></li>
            </ul>
            <div className={styles.spacer1}></div>
        </nav>
    )
}