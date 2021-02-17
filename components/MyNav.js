import styles from "../styles/MyNav.module.scss"
import Image from 'next/image'

export default function MyNav() {
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