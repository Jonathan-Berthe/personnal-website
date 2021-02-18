import styles from '../styles/Section2.module.scss'
import Image from 'next/image'

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import PortfolioContainer from './PortfolioContainer';

export default function Section2() {
    return (
        <div className={styles.section2 + ' section'} >
            <Controller>
                <Scene triggerHook={0.75} duration={0}>
                    <Tween from={{ rotation: -180.0001 }} to={{ rotation: 0 }}>
                        <div className={styles.cercleBeige}></div>
                    </Tween>
                </Scene>
            </Controller>
            <Controller>
                <Scene triggerHook={0.75} duration={0}>
                    <Tween from={{ x: -1500 }} to={{ x: 0 }}>
                        <div className={styles.portfoliosContainer}>
                            <div className={styles.spacer4}></div>
                            <PortfolioContainer title='Web' />
                            <div className={styles.spacer3}></div>
                            <PortfolioContainer title='App' />
                            <div className={styles.spacer4}></div>
                        </div>
                    </Tween>
                </Scene>
            </Controller>


        </div>
    )
}