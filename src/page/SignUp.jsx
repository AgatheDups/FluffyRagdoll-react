/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion"
import { getSignUpData } from "../InternationalIzer";

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.toUpperCase());

export default function SignUp (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [signUpData, _] = useState(getSignUpData())
    const [showForms, setShowForms] = useState(false);

    
    // Function to toggle the visibility of the additional form fields
    const handleRadioChange = () => {
        setShowForms((prevState) => !prevState); // Toggle the state
    };


    // function to change invalid icon to valid for email 
    const [values, setValues] = useState({ email: "", emailVerif: "" });
    const [errors, setErrors] = useState({});

    const validateAndSubmitForm = (e) => {
        e.preventDefault();
    
        const errors = {};
    
        if (!isEmail(values.email)) {
            errors.email = "Format incorrect";
        }

        if (values.emailVerif != values.email || values.emailVerif === "" ) {
            errors.emailVerif = "Email différent";
        }

        if(password != passwordVerif) {
            errors.passwordVerif = "Mots de passes différents";
        }

        setErrors(errors);
        if (Object.keys(errors).length == 0) {
            alert(JSON.stringify(values, null, 2));
        }
    };

     
    const setEmail = (e) => {
        setValues((values) => ({ ...values, email: e.target.value }));
    };
    const setEmailVerif = (e) => {
        setValues((values) => ({ ...values, emailVerif: e.target.value }));
    };

    // function to change invalid icon to valid for password
    const [password, setPassword] = useState('');
    const [passwordVerif, setPasswordVerif] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVerifVisible, setPasswordVerifVisible] = useState(false);

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleVisibilityVerif = () => {
        setPasswordVerifVisible(!passwordVerifVisible);
    };
    
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body card-singn">
                                <form action="" method="post" onSubmit={validateAndSubmitForm}>
                                    <div>
                                        <div className="box d-flex">
                                            <label htmlFor="email" className="form-label"/>
                                            <input type="email" className="form-control" value={values.email} onChange={setEmail} id="email" placeholder={signUpData.pEmail} required/>
                                            <div className="valid"><ion-icon name={isEmail(values.email) ? "checkmark-outline" : "close-outline"}></ion-icon></div>
                                        </div>
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="email-verif" className="form-label"/>
                                        <input type="email" className="form-control email" value={values.emailVerif} onChange={setEmailVerif} id="email-verif" placeholder={signUpData.pEmailVerif} required/>
                                        <span className="valid-verif"><ion-icon name={values.emailVerif == values.email && values.emailVerif != "" ? "checkmark-outline" : "close-outline"}></ion-icon></span>    
                                    </div>
                                    {errors.emailVerif && <div className="text-danger">{errors.emailVerif}</div>}
                                    <div className="box d-flex">
                                        <label htmlFor="password" className="form-label"/>
                                        <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder={signUpData.pPassword} required/>
                                        <span className="showPassword" onClick={toggleVisibility}><ion-icon name={passwordVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                    </div>
                                    <div className="mb-3 box d-flex">
                                        <label htmlFor="password" className="form-label"/>
                                        <input type={passwordVerifVisible ? 'text' : 'password'} value={passwordVerif} onChange={(e) => setPasswordVerif(e.target.value)} className="form-control" id="password-verif" placeholder={signUpData.pPasswordVerif} required/>
                                        <span className="showPassword-verif"onClick={toggleVisibilityVerif}><ion-icon name={passwordVerifVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="pseudo" className="form-label"/>
                                        <input type="text" className="form-control" id="pseudo" placeholder={signUpData.pPseudo} required/>
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="city" className="form-label"/>
                                        <input type="text" className="form-control" id="city" placeholder={signUpData.pCity} required/>
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="breeder-verif" className="form-label">{signUpData.labelBreeder}</label>
                                        <input type="checkbox" className="form-check-input" id="breeder-verif" name="showForms" onChange={handleRadioChange}/>
                                    </div>
                                    {showForms && (
                                        <div>
                                        <form className="form-toggle">
                                            <label htmlFor="siret" className="form-label"/>
                                                <input type="number" className="form-control" id="siret" min={10000000000000} max={99999999999999} placeholder={signUpData.numberSiret}/>
                                            <label htmlFor="phone-number" className="form-label"/>
                                            <input type="tel" className="form-control" id="phone-number" placeholder={signUpData.numberPhone}/>
                                        </form>
                                        </div>
                                    )}
                                    <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-danger">{signUpData.buttonConnection}</button>
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
