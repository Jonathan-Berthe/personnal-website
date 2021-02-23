import styles from '../styles/Section2.module.scss'

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import PortfolioContainer from './PortfolioContainer';

export default function Section2() {
    return (
        <div className={styles.section2 + ' section'} id='section2'>
            <Controller>
                <Scene triggerHook={0.85} duration={0}>
                    <Tween from={{ rotation: -180.0001 }} to={{ rotation: 0 }}>
                        <div className={styles.cercleRouge}></div>
                    </Tween>
                </Scene>
            </Controller>

            <div className={styles.portfoliosContainer}>
                <PortfolioContainer title='Web' />
                <PortfolioContainer title='App' />
            </div>

            <Controller >
                <Scene triggerHook={0} duration={0}>
                    <Tween from={{ rotation: -90 }} to={{ rotation: 90 }}>
                        <div className={styles.cercleBeige}></div>
                    </Tween>
                </Scene>
            </Controller>

        </div>
    )
}