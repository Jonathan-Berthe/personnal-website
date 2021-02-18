import styles from "../styles/MyNav.module.scss"
import Image from 'next/image'
import { useEffect } from "react"


import { debounce } from 'lodash'


export default function MyNav() {

    useEffect(() => {
        document.addEventListener('scroll', debounce(() => {
            const scrollY = window.scrollY
            const elem = document.getElementsByClassName(styles.navContainer)[0]
            if(scrollY > 10) elem.classList.add(styles.active)
            else elem.classList.remove(styles.active)
        }, 5, { leading: true, trailing: false }))
    }, [])

    return (
        <nav className={styles.navContainer}>
            <div className={styles.spacer6}></div>
            <div className={styles.logoContainer}></div>
            <ul>
                <li>About Me</li>
                <li>CV</li>
                <li>Portfolio</li>
                <li className={styles.logo}>
                    <a href="https://www.github.com/Jonathan-Berthe/" target="_blank"><Image src='/../public/github.png' width={32} height={32} /></a>
                </li>
                <li className={styles.contactMe}>Contact me</li>
            </ul>
            <div className={styles.spacer1}></div>
        </nav>
    )
}