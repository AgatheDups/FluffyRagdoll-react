/* eslint-disable react/prop-types */
import { useState } from "react";
import { getRegistrationData } from "../InternationalIzer";
import Footer from "../components/Footer";
import { motion } from "framer-motion"



export default function Registration (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [registrationData, _] = useState(getRegistrationData())
    const [showForms, setShowForms] = useState(false);

    // Function for du button radio is_breeder
    const handleRadioChange = (event) => {
      if (event.target.value === "yes") {
        setShowForms(true);
      } else {
        setShowForms(false);
      }
    };
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            <div id="content-panel-card">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="box d-flex">
                                        <label htmlFor="pseudo" className="form-label"/>
                                        <input type="text" className="form-control" id="pseudo" placeholder={registrationData.pPseudo} required/>
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="city" className="form-label"/>
                                        <input type="text" className="form-control" id="city" placeholder={registrationData.pCity} required/>
                                    </div>
                                    <div className="box d-flex">
                                        <label htmlFor="breeder-verif" className="form-label">{registrationData.labelBreeder}</label>
                                        <input type="radio" className="form-check-input" id="breeder-verif" name="showForms" onChange={handleRadioChange}/>
                                    </div>
                                    {showForms && (
                                        <div>
                                        <form>
                                            <label htmlFor="siret" className="form-label"/>
                                                <input type="number" className="form-control" id="siret" min={10000000000000} max={99999999999999} placeholder={registrationData.numberSiret}/>
                                            <label htmlFor="phone-number" className="form-label"/>
                                            <input type="tel" className="form-control" id="phone-number" placeholder={registrationData.numberPhone}/>
                                        </form>
                                        </div>
                                    )};
                                    <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-danger">{registrationData.buttonConnection}</button>
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