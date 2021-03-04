import Head from 'next/head'
import MyNav from './MyNav'
import styles from "../styles/Layout.module.scss"
export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="utf-8" />
                <title>Jonathan Berthe</title>
                <link rel="icon" href="/code.svg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Personnal website with portfolio of Jonathan Berthe, app and web front-end developper, based in Brussels, Belgium."/>
                <meta name="keywords" content="Jonathan, Berthe, front-end developer, mobile, web, flutter, react, portfolio"/>
                <meta name="robots" content="index"/>
                <meta name="google-site-verification" content="2yevhVjFIeRSUcqbW6tgc_JHqCuNk52c6JJ6Kfw8Xx0" />
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

