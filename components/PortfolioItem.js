import styles from '../styles/PortfolioItem.module.scss'

import Image from 'next/image'

import GitSVG from '../public/github.svg'
import LinkSVG from '../public/link.svg'
import YtSVG from '../public/yt.svg'

export default function PortfolioItem({ data }) {

    const handleClick = url => {
        window.open(url)
    }

    return (
        <>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={data.imageSrc}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit='cover'
                    quality={100}
                />
            </div>
            <div className={styles.spacer1}></div>
            <h2 className={styles.h2}>{data.title}</h2>
            <div className={styles.spacer1}></div>
            <div className={styles.rowLogoContainer}>
                <div className={styles.spacer8}></div>
                {
                    data.linkWebsite.length > 0 &&
                    <>
                        <div className={styles.spacer1}></div>
                        <div className={styles.logo + ' ' + styles.linkWebsite} onClick={() => handleClick(data.linkWebsite)}>
                            <LinkSVG />
                        </div>
                        <div className={styles.spacer1}></div>

                    </>
                }
                {
                    data.linkGit.length > 0 &&
                    <>
                        <div className={styles.spacer1}></div>
                        <div className={styles.logo + ' ' + styles.github} onClick={() => handleClick(data.linkGit)}>
                            <GitSVG />
                        </div>
                        <div className={styles.spacer1}></div>

                    </>
                }
                {
                    data.linkYt.length > 0 &&
                    <>
                        <div className={styles.spacer1}></div>
                        <div className={styles.logo + ' ' + styles.yt} onClick={() => handleClick(data.linkYt)}>
                            <YtSVG />
                        </div>
                        <div className={styles.spacer1}></div>
                    </>
                }
                {/*  <div className={styles.logo + ' ' + styles.yt} onClick={() => handleClick(data.linkYt)}>
                    <YtSVG />
                </div> */}
                <div className={styles.spacer8}></div>
            </div>
            <div className={styles.spacer1}></div>
            <p className={styles.p}>{data.descr} </p>
            <div className={styles.spacer8}></div>
        </>
    )
}