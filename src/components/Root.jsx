/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Root(){
    return <div className="navbar-nav">        
        <NavLink className="nav-item" to="/">Acceuil</NavLink>
        <hr/>
        <NavLink className="nav-item" to="/entretien">Entretien</NavLink>
        <hr/>
        <NavLink className="nav-item" to="/alimentation">Alimentation & Jouet</NavLink>
        <hr/>
        <NavLink className="nav-item" to="/adoption">Adoption</NavLink>
        <hr/>
        <NavLink className="nav-item" to="/calcul">Calcul de poids</NavLink>
        <hr/>
        <NavLink className="nav-item" to="/forum"><img src="../public\image\chat-solid.png"/>Forum</NavLink>
        <NavLink className="nav-item" to="/connexion"><img src="../public\image\user-circle.png"/> Connexion</NavLink>
    </div>
}
