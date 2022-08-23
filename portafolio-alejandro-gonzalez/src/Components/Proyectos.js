import React from "react";

const estiloImagen ={
    height: "25vh"
}

const estiloTexto ={
    marginTop: "15px"
}

const estiloTexto2 ={
    marginTop: "0px",
    paddingTop: "3px",
}

const estiloBoton ={
    marginRight: "150px"
}

const Proyectos = () => {

    return (
        <>
            <div className="card" style={{ width: "30rem" }}>
                <img src="https://i.ibb.co/H4zwxkr/simplecounter.png" className="card-img-top" alt="..." style={estiloImagen}/>
                <div className="card-body">
                    <h5 className="card-title">Contador Simple</h5>
                    <p className="card-text" style={estiloTexto}>
                        Proyecto que consiste en un contador simple creado en React utilizando hooks como setInterval para su desarrollo
                    </p>
                </div>
                <div className="card-body" style={estiloTexto2}>
                    <a href="https://counter-alejandro-gonzalez.vercel.app/" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Demo en vivo
                    </a>
                    <a href="https://github.com/AlejandroGonzalezG/counter" target='blank' className="btn btn-primary">
                        Código
                    </a>
                </div>
            </div>

        </>
    )
};


export default Proyectos;