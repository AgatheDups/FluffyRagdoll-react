/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);

    let focusOnBtn = false;
    let focusOnNavElement = false;

    function checkNavFocus () {
        if(!focusOnBtn && !focusOnNavElement){
            hide();
        }
    }

    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <button
                    onBlur={() => {
                        focusOnBtn = false;
                        checkNavFocus()
                    }}
                    onFocus={() => focusOnBtn = true}
                    className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                    onClick={toggle}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggleExternalContent" 
                    aria-controls="navbarToggleExternalContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <img src="./public/image/menu-regular.png" alt="Menu" className="burger-icon" /> 
                    <img src="./public/image/x-regular.png" alt="Close" className="close-icon" /> 
                </button>
                <div className="name-site d-flex justify-items-center">
                    <img id="logo-fluffragdolls" src="./public/image/logo-fluffyragdolls.png" alt="Logo FluffyRagdolls" />
                    <NavLink to="/" onClick={hide}>
                        <h1>FluffyRagdolls</h1>
                    </NavLink>
                </div>
                <button>
                    <NavLink to="/connexion" onClick={hide}>
                        <img src="./public/image/user-circle.png" alt="User" />
                    </NavLink>
                </button>
            </div>
            <div className={`menu rounded collapse ${isOpen ? 'show' : ''}`} id="navbarToggleExternalContent">
                <Root />
            </div>
        </nav>
    )


    function Root(){
        return (
            <div className="navbar-nav" onBlur={() => {focusOnNavElement = false; checkNavFocus()}} onPointerDown={() => focusOnNavElement = true}>        
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/">Acceuil</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/entretien">Entretien</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/alimentation">Alimentation & Jouet</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/adoption">Adoption</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/calcul">Calcul de poids</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/forum"><img src="../public\image\chat-solid.png"/>Forum</NavLink>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/connexion"><img src="../public\image\user-circle.png"/> Connexion</NavLink>
            </div>)
    }
}
