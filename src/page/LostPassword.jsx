/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LostPasswordData from "./json/lostpassword.json"
import { motion } from "framer-motion"


export default function LostPassword (){
        // placeholder email and button in Json
        const [contentLostPassword, setContentLostPassword] = useState({});


        useEffect(() => {
            setContentLostPassword(LostPasswordData);
        },[]);
    
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="box d-flex">
                                        <label htmlFor="email" className="form-label"></label>
                                        <input type="email" className="form-control" id="email" placeholder={contentLostPassword.pEmail} required/>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-danger">{contentLostPassword.buttonReset}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer classFooter={'stick-footer'}/>
        </motion.div>
    )
}
