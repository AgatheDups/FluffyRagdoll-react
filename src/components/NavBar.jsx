/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getNavBarData } from "../InternationalIzer";


export default function NavBar (){
    // Call Json
    // eslint-disable-next-line no-unused-vars
    const [navBarData, _] = useState(getNavBarData())


    // function for check focus
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
                    <img src="/assets/menu-regular.png" alt="Menu" className="burger-icon" /> 
                    <img src="/assets/x-regular.png" alt="Close" className="close-icon" /> 
                </button>
                <div className="name-site d-flex justify-items-center">
                    <img id="logo-fluffragdolls" src="/assets/logo-fluffyragdolls.png" alt="Logo FluffyRagdolls" />
                    <NavLink to="/" onClick={hide}>
                        <h1>FluffyRagdolls</h1>
                    </NavLink>
                </div>
                <button>
                    <NavLink to="/signin" onClick={hide}>
                        <img src="/assets/user-circle.png" alt="User" />
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
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/">{navBarData.linkHome}</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/care">{navBarData.linkCare}</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/food">{navBarData.linkFood}</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/adoption">{navBarData.linkAdoption}</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/calculator">{navBarData.linkWeightCalculator}</NavLink>
                <hr/>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/forum">
                    <img src="/assets/chat-solid.png"/>{navBarData.linkForum}
                </NavLink>
                <NavLink className="nav-item" onClick={toggle} onBlur={hide} onFocus={show} to="/signin">
                    <img src="/assets/user-circle.png"/> {navBarData.linkConnection}
                </NavLink>
            </div>)
    }
}
