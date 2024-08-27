/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { getContactData } from "../InternationalIzer";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../components/Footer";

export default function Contact (){
        // Call Json
    // eslint-disable-next-line no-unused-vars
    const [contactData, _] = useState(getContactData())
    const form = useRef();
    const [mailSent, setMailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if(mailSent){
            return
        }
        emailjs
        .sendForm('service_6yjr2vm', 'template_io72mpb', form.current, {
          publicKey: 'ZlnVL4Dadk8igzUm9',
        })
        .then(
          () => {
            setMailSent(true)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body card-contact">
                            <h6>{contactData.title}</h6>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="name"/>
                                        <input type="text" id="name" name="from_name" placeholder={contactData.name} required/>
                                    </div>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="email"/>
                                        <input type="email" id="email" name="from_mail"  placeholder={contactData.email} required/>
                                    </div>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="subject"/>
                                        <input type="text" id="subject" name="subject" placeholder={contactData.subject} required/>
                                    </div>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="message"/>
                                        <textarea type="text" id="message" name="message"  placeholder={contactData.message} required/> 
                                    </div>
                                </form>
                                <button type="submit" className="btn btn-danger">{contactData.buttonSubmit}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer classFooter={'stick-footer'}/> 
        </motion.div>
    )
}