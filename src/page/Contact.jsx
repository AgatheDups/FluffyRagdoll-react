import { motion } from "framer-motion"
import { getContactData } from "../InternationalIzer";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact (){
        // Call Json
    // eslint-disable-next-line no-unused-vars
    const [contactData, _] = useState(getContactData())

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body card-contact">
                            <h6>{contactData.title}</h6>
                                <form action="">
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="name"/>
                                        <input type="text" placeholder={contactData.name}/>
                                    </div>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="email"/>
                                        <input type="text"  placeholder={contactData.email}/>
                                    </div>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="subject"/>
                                        <input type="text"  placeholder={contactData.subject}/>
                                    </div>
                                    <div className="box d-flex box-contact">
                                        <label htmlFor="message"/>
                                        <textarea type="text"  placeholder={contactData.message}/> 
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