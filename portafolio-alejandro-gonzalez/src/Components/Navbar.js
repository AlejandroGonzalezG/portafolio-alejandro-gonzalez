import React, { useContext, useEffect } from "react";


const estiloNavbar = {
    justifyContent: "end"
}

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <h3 className="navbar-brand" href="#">
                    AG
                </h3>
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
                            <a className="nav-link" href="#">
                                Sobre mí
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Proyectos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Herramientas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;