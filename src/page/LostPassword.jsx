/* eslint-disable react/prop-types */
import Footer from "../components/Footer";



export default function LostPassword (){
    
    return (
        <div>
            <div id="content-panel">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card bg-light mb-4 custom-shadow">
                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="box d-flex">
                                        <label htmlFor="email" className="form-label"></label>
                                        <input type="email" className="form-control" id="email" placeholder="Email" required/>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-danger">Réinitialisation</button>
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
