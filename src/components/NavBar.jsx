/* eslint-disable react/prop-types */
import Root from "./Root";
import { NavLink } from "react-router-dom";

export default function NavBar (){
    
    return <nav className="navbar fixed-top">
        <div className="container-fluid">
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src=".\public\image\menu-regular.png" alt="" className="burger-icon"/>
                <img src=".\public\image\x-regular.png" alt="" className="close-icon"/>
            </button>
            <div className="name-site d-flex justify-items-center">
                <img id="logo-fluffragdolls" src=".\public\image\logo-fluffyragdolls.png" alt="Logo FluffyRagdolls" />
                <NavLink to="/"><h1>FluffyRagdolls</h1></NavLink>
            </div>
            <button>
                <NavLink to="/connexion"><img src="./public\image\user-circle.png" alt="" /></NavLink>
            </button>
        </div> 
        <div className="collapse menu col-lg-4 rounded" id="navbarToggleExternalContent">
            <Root/>
        </div>
    </nav>
}