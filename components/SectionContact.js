import styles from '../styles/SectionContact.module.scss'

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"
import emailjs from 'emailjs-com'
import axios from 'axios'

import { useEffect, useState } from 'react'
import VisitCard from './VisitCard'


export default function SectionContact() {


    useEffect(() => {
        document.getElementsByClassName(styles.sectionContact)[0].onmousemove = event => {
            if(window.innerWidth <= 480) return
            const posRelX = event.clientX / window.innerWidth
            document.getElementsByClassName(styles.circleRed)[0].style.transform = `translateX(-${posRelX * 10}%)`
            document.getElementsByClassName(styles.circleBeige)[0].style.transform = `translateX(${posRelX * 30}%)`
        }
    }, [])

    const [emailState, setEmailState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const [alreadySent, setAlreadySent] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, email, subject, message } = emailState

        let templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'John',
            from_subject: subject,
            message: message,
        }
        setIsLoading(true)
        setAlreadySent(false)

        const res = await fetch(`/api/emailJsAccess`)
        const api = await res.json()

        emailjs.send(api.service, api.template, templateParams, api.key)
            .then(function () {
                setIsLoading(false)
                setAlreadySent(true)
                resetForm()
            }, function () {
                alert('An error occured')
                resetForm()
            })
    }

    const resetForm = () => {
        setEmailState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setEmailState({ ...emailState, [name]: value })
    }

    return (
        <section className={styles.sectionContact + ' section'} id='section3'>

            <VisitCard />

            <Controller>
                <Scene triggerHook={0.65} duration={0} reverse={false}>
                    <Tween from={{ y: -500, scale: 0 }} to={{ y: 0, scale: 1 }}>
                        <form onSubmit={handleSubmit} id="contact-form" className={styles.contactForm}>
                            <h3>Contact Me</h3>
                            <input value={emailState.name} onChange={handleChange} placeholder="Name" required type="text" name="name" />

                            <input value={emailState.email} onChange={handleChange} placeholder="E-Mail" required type="email" name="email" />

                            <input value={emailState.subject} onChange={handleChange} placeholder="Subject" required type="text" name="subject" />

                            <textarea value={emailState.message} onChange={handleChange} placeholder="Message" required name="message"></textarea>
                            <div className={styles.submitContainer}>
                                {isLoading ? <div className={styles.loader}></div> : <input type='submit' className={styles.submitButton} value="Send" />}
                                {alreadySent && <p>You already sent an email </p>}
                            </div>
                            <div className={styles.circleRed}></div>
                            <div className={styles.circleBeige}></div>
                        </form>

                    </Tween>
                </Scene>
            </Controller>


        </section>


    )
}