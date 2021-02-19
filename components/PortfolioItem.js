import styles from '../styles/PortfolioItem.module.scss'

import Image from 'next/image'

export default function PortfolioItem({ data }) {
    return (
        <>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={data.imageSrc}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit= 'cover'
                    quality={100}
                />
            </div>
            <div className={styles.spacer1}></div>
            <div className={styles.rowLogoContainer}>

            </div>
            <div className={styles.spacer1}></div>
            <p className={styles.p}>{data.descr} </p>
            <div className={styles.spacer8}></div>
        </>
    )
}