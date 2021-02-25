import styles from '../styles/VisitCard.module.scss'
import Image from 'next/image'

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

import HomeSVG from '../public/home.svg'
import MailSVG from '../public/mail.svg'
import PhoneSVG from '../public/phone.svg'

export default function VisitCard() {
    return (
        <Controller>
            <Scene triggerHook={0.5} duration={0} reverse={false}>
                <Tween from={{ y: 500, scale: 0 }} to={{ y: 0, scale: 1}}>
                    <div className={styles.cardContainer + ' visitCard'}>
                        <div className={styles.imgContainer}>
                            <Image
                                src="/me.jpg"
                                alt="Picture of the author"
                                layout='fill'
                                objectFit='cover'
                                priority={true}
                            />
                        </div>
                        <div className={styles.infosContainer}>
                            <div className={styles.spacer3}></div>
                            <div className={styles.name + ' ' + styles.info}>

                                <p>Jonathan Berthe</p>
                            </div>
                            <div className={styles.spacer1}></div>
                            <div className={styles.email + ' ' + styles.info}>
                                <MailSVG />
                                <p>jonath.berthe@gmail.com</p>
                            </div>
                            <div className={styles.spacer1}></div>
                            <div className={styles.adress + ' ' + styles.info}>
                                <HomeSVG />
                                <div className={styles.adressBox}>
                                    <p>21, Avenue Éléonore</p>
                                    <p>1150 Woluwe-Saint-Pierre </p>
                                    <p>Belgium</p>
                                </div>

                            </div>
                            <div className={styles.spacer1}></div>
                            <div className={styles.phone + ' ' + styles.info}>
                                <PhoneSVG />
                                <p>+32478178683</p>
                            </div>
                            <div className={styles.spacer3}></div>
                        </div>
                    </div>
                </Tween>
            </Scene>
        </Controller>
    )
}