import emailjs from 'emailjs-com'
import { useState } from 'react';
import { Widget, PopupButton } from '@typeform/embed-react'
function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_clny1xu", "template_cuoehmi", "#contactForm", "user_VQC9i6KuYa2RqIDGmGaOR")
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
    return (
        <section id="contact" className="h-full max-w-3xl p-3 mx-auto text-white">
            <div className="mt-20">

                <div id="wrapper" data-tf-widget="NDNvzJlo" data-tf-inline-on-mobile data-tf-medium="snippet" ></div>
                <h2 className="mt-20 mb-5 text-3xl text-center text-yellow-400 uppercase shadow-md md:text-6xl font-body shadow-yellow-400">Get In Touch</h2>
                <Widget id="NDNvzJlo" height={500} className="relative z-20 mt-20 mb-20" />

                {/* <div>
                    <p className="hidden italic md:block">Have a project for me? Think I'd be good fit for your team? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to contact with me. </p>
                    <form className="z-20 w-full mt-10" id="contactForm" name="#contactForm" onSubmit={sendEmail}>
                        <div className="mb-10 md:flex md:items-center">
                            <div className="md:w-1/4">
                                <label htmlFor="contactName" className="block pr-4 mb-1 font-bold text-white md:mb-0">Full Name <span>*</span></label>
                            </div>
                            <div className="relative z-20 md:w-3/4">
                                <input type="text" className="contact-input" value={name} size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)} />
                            </div>
                        </div>


                        <div className="mb-6 md:flex md:items-center">
                            <div className="md:w-1/4">
                                <label htmlFor="contactEmail" className="block pr-4 mb-1 font-bold text-white md:mb-0">Email <span>*</span></label>
                            </div>
                            <div className="relative z-20 md:w-3/4">
                                <input type="text" className="contact-input" value={email} size="35" id="contactEmail" name="contactEmail" onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>


                        <div className="mb-6 md:flex md:items-center">
                            <div className="md:w-1/4">
                                <label htmlFor="contactSubject" className="block pr-4 mb-1 font-bold text-white md:mb-0">Subject <span>*</span></label>
                            </div>
                            <div className="relative z-20 md:w-3/4">
                                <input type="text" className="contact-input" value={subject} size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)} />
                            </div>
                        </div>


                        <div className="mb-6 md:flex md:items-center">
                            <div className="md:w-1/4">
                                <label htmlFor="contactMessage" className="block pr-4 mb-1 font-bold text-white md:mb-0">Message <span>*</span></label>
                            </div>
                            <div className="relative z-20 md:w-3/4">
                                <textarea type="text" className="contact-input" value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="5" id="contactMessage" name="contactMessage" />
                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-center w-full mt-10 mb-40">
                            <button type='submit' value="Send" className="z-20 w-full p-5 font-bold text-white uppercase bg-yellow-400 shadow-xl md:w-1/2 h-4/6 rounded-xl hover:shadow-yellow-400/50 ">Submit</button>
                        </div>
                    </form>
                </div> */}


            </div>
        </section>
    )
}

export default Contact
