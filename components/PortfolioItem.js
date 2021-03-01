import styles from '../styles/PortfolioItem.module.scss'

import Image from 'next/image'
import ReactDOM from 'react-dom'

import GitSVG from '../public/github.svg'
import LinkSVG from '../public/link.svg'
import YtSVG from '../public/yt.svg'
import ExpandSVG from '../public/expand.svg'

export default function PortfolioItem({ data }) {

    const handleClick = url => {
        window.open(url)
    }

    const handleExpandClick = () => {
        // Get the modal
        const modal = document.getElementsByClassName('modal')[0];
        modal.style.display = "block";

        ReactDOM.render(
            <Image
                src={data.imageSrc}
                alt="Picture of the author"
                width={1100}
                height={640}
                quality={100}
            />,
            document.querySelector('.modal-content')
        )

    }

    return (
        <>
            <div className={styles.imageContainer} >
                <Image onClick={handleExpandClick}
                    className={styles.image}
                    src={data.imageSrc}
                    alt="Picture of the author"
                    width={1100}
                    height={640}
                    quality={100}
                    priority={true}
                />
                {/* <ExpandSVG className={data.type === 'App' ? styles.isApp : ''}/> */}
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
                <div className={styles.spacer8}></div>
            </div>
            <div className={styles.spacer1}></div>
            <p className={styles.p}>{data.descr} </p>
            <div className={styles.spacer8}></div>
        </>
    )
}