import React from "react";
import { Link } from "react-router-dom";
import SvgComponent from "../Components/logo.jsx"

const estiloNavbar = {
    justifyContent: "end"
}

const estiloDiv = {
    backgroundImage: "url('https://i.ibb.co/kBkzTJg/tarjeta.png')",
    backgroundSize: "cover",
    border: "none",
}

const estiloLogo = {
    maxWidth: "295px",
    midWidht: "200px",
    fill : "transparent"
}


const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark">
            <div className="container-fluid" >
                <div className="container-fluid" style={estiloLogo}>
                    <SvgComponent />
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={estiloNavbar}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Sobre mí
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="proyectos">
                                Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="herramientas">
                                Herramientas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contacto">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;