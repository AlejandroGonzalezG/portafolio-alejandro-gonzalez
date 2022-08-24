import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


const estiloNavbar = {
    justifyContent: "end"
}

const estiloDiv = {
    backgroundImage: "url('https://i.ibb.co/kBkzTJg/tarjeta.png')",
    backgroundSize: "cover",
    border: "none",
}


const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src="https://www.seekpng.com/png/full/85-855190_html-code-coding-language-svg-png-icon-free.png" style={{maxWidth: 50,}}/>
                </Link>
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