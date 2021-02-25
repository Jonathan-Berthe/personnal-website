import styles from '../styles/SectionContact.module.scss'

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

import emailjs from 'emailjs-com'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import VisitCard from './VisitCard'


export default function SectionContact() {

    const [emailState, setEmailState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const [alreadySent, setAlreadySent] = useState(false)


    const handleSubmit = (e) => {
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
        emailjs.send('service_ofel1im', 'template_37yahfr', templateParams, 'user_BMQas2FYwRDDgZqY0xDUf')
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
            {/* <Controller>
                <Scene triggerHook={0.85} duration={0}>
                    <Tween from={{ rotation: -180.0001 }} to={{ rotation: 0 }}>
                        <div className={styles.cercleRouge}></div>
                    </Tween>
                </Scene>
            </Controller> */}
            <VisitCard />
            <form onSubmit={handleSubmit} id="contact-form" className={styles.contactForm}>
                <h3>Contact form</h3>
                <input value={emailState.name} onChange={handleChange} placeholder="Name" required type="text" name="name" />

                <input value={emailState.email} onChange={handleChange} placeholder="E-Mail" required type="email" name="email" />

                <input value={emailState.subject} onChange={handleChange} placeholder="Subject" required type="text" name="subject" />

                <textarea value={emailState.message} onChange={handleChange} placeholder="Message" required name="message"></textarea>
                <div className={styles.submitContainer}>
                    {isLoading ? <div className={styles.loader}></div> : <input type='submit' className={styles.submitButton} value="Send" />}
                    {alreadySent && <p>You're already sent an email </p>}
                </div>


            </form>

        </section>
    )
}