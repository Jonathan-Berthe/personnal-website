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
                <p>© Copyright - Jonathan Berthe - 2021</p>
            </footer>

        </div>
    )
}

