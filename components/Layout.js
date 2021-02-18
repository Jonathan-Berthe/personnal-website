import Head from 'next/head'
import MyNav from './MyNav'
import styles from "../styles/Layout.module.scss"
export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jonathan Berthe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
            </header>
            <MyNav />
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
            </footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
        </div>
    )
}

