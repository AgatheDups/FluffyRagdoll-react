/* eslint-disable react/prop-types */
import Footer from "../components/Footer";


export default function Inscription (){
    
    return (<div>
        <div id="content-panel">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bg-light mb-4 custom-shadow">
                        <div className="card-body">
                            <form action="" method="post">
                                <div className="box d-flex">
                                    <label htmlFor="email" className="form-label"></label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" required/>
                                    <span className="valid"><ion-icon name="close-outline"></ion-icon></span>
                                </div>
                                <div className="box d-flex">
                                    <label htmlFor="email-verif" className="form-label"></label>
                                    <input type="email" className="form-control email" id="email-verif" placeholder="Vérification email" required/>
                                    <span className="valid-verif"><ion-icon name="close-outline"></ion-icon></span>    
                                </div>
                                <div className="box d-flex">
                                    <label htmlFor="password" className="form-label"></label>
                                    <input type="password" className="form-control" id="password" placeholder="Mot de passe" required/>
                                    <span className="showPassword"><ion-icon name="eye-off-outline"></ion-icon></span>
                                </div>
                                <div className="mb-3 box d-flex">
                                    <label htmlFor="password" className="form-label"></label>
                                    <input type="password" className="form-control password" id="password-verif" placeholder="Vérification mot de passe" required/>
                                    <span className="showPassword-verif"><ion-icon name="eye-off-outline"></ion-icon></span>
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
        <Footer/> 
    </div>)
}
