/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import signInData from "./json/signin.json"
import { motion } from "framer-motion"

// regex for email
const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.toUpperCase());

export default function SignIn (){
    // placeholder email and password, button and links in Json
    const [contentSignIn, setContentSignIn] = useState({});


    useEffect(() => {
        setContentSignIn(signInData);
    },[]);


    // function to change invalid icon to valid for email 
    const [values, setValues] = useState({ email: "" });
    const [errors, setErrors] = useState({});

    const validateAndSubmitForm = (e) => {
        e.preventDefault();
     
        const errors = {};
     
        if (!isEmail(values.email)) {
          errors.email = "Format incorrect";
        }
     
        setErrors(errors);
     
        if (!Object.keys(errors).length) {
          alert(JSON.stringify(values, null, 2));
        }
    };
     
    const setEmail = (e) => {
        setValues((values) => ({ ...values, email: e.target.value }));
    };


    // function to change invalid icon to valid for password
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // content for sign in
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body">
                                <form onSubmit={validateAndSubmitForm} action="" method="post">
                                    <div className="box d-flex">
                                        <label htmlFor="email" className="form-label"/>
                                        <input type="email" className="form-control" id="email" value={values.email} onChange={setEmail} placeholder={contentSignIn.pEmail} required/>
                                        <div className="valid">
                                            <ion-icon name={isEmail(values.email) ? "checkmark-outline" : "close-outline"}/>
                                        </div>
                                    </div>
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                    <div className="mb-3 box d-flex">
                                        <label htmlFor="password" className="form-label"/>
                                        <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder={contentSignIn.pPassword} required/>
                                        <div className="showPassword" onClick={toggleVisibility}>
                                            <ion-icon name={passwordVisible ? "eye-outline" : "eye-off-outline"}/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-danger">{contentSignIn.buttonConnection}</button>
                                    </div>
                                    <div>
                                    <NavLink to="/motdepasse-oublier">{contentSignIn.linkLostP}</NavLink>
                                    <br/>
                                    <NavLink to="/inscription">{contentSignIn.linkSignUp}</NavLink>
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
