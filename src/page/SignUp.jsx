/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "../components/Footer";

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.toUpperCase());

export default function SignUp (){
    // email
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

        setErrors(errors);

        if (!Object.keys(errors).length) {
          alert(JSON.stringify(values, null, 2));
        }
    };

     
    const setEmail = (e) => {
        setValues((values) => ({ ...values, email: e.target.value }));
    };
    const setEmailVerif = (e) => {
        setValues((values) => ({ ...values, emailVerif: e.target.value }));
    };

    // password
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
        <div>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body">
                                <form action="" method="post" onSubmit={validateAndSubmitForm}>
                                    <div>
                                        <div className="box d-flex">
                                            <label htmlFor="email" className="form-label"></label>
                                            <input type="email" className="form-control" value={values.email} onChange={setEmail} id="email" placeholder="Email" required/>
                                            <div className="valid"><ion-icon name={isEmail(values.email) ? "checkmark-outline" : "close-outline"}></ion-icon></div>
                                        </div>
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="email-verif" className="form-label"></label>
                                        <input type="email" className="form-control email" value={values.emailVerif} onChange={setEmailVerif} id="email-verif" placeholder="Vérification email" required/>
                                        <span className="valid-verif"><ion-icon name={values.emailVerif == values.email && values.emailVerif != "" ? "checkmark-outline" : "close-outline"}></ion-icon></span>    
                                    </div>
                                    {errors.emailVerif && <div className="text-danger">{errors.emailVerif}</div>}
                                    <div className="box d-flex">
                                        <label htmlFor="password" className="form-label"></label>
                                        <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Mot de passe" required/>
                                        <span className="showPassword" onClick={toggleVisibility}><ion-icon name={passwordVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                    </div>
                                    <div className="mb-3 box d-flex">
                                        <label htmlFor="password" className="form-label"></label>
                                        <input type={passwordVerifVisible ? 'text' : 'password'} value={passwordVerif} onChange={(e) => setPasswordVerif(e.target.value)} className="form-control" id="password-verif" placeholder="Vérification mot de passe" required/>
                                        <span className="showPassword-verif"onClick={toggleVisibilityVerif}><ion-icon name={passwordVerifVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-danger">Connexion</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer classFooter={'stick-footer'}/> 
        </div>
    )
}