import React, { useContext, useEffect } from "react";

const estilodiv = {
    marginTop: "30px",

};

const estiloLetra = {
    color: "#FFFFFF",
    textAlign: "justify"
}

const estiloContainer = {
    margin: "15px",
    marginTop: "30px",
    color: "#FFFFFF"
}
const estiloImagen = {
    marginTop: "40px",
}

const estiloBoton = {
    marginTop: "48px"
}


const SobreMi = () => {

    return (
        <>
            <div className="card mb-4 bg-transparent mx-3 m-3 my-6 border-0 rounded-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/53daa37ce4b0f890bb843382/1421516330237-9GPRNWXZMLKB9X8CH2Y7/image-asset.jpeg"
                            className="img-fluid mb-5 rounded opacity-80"
                            alt="..." style={estiloImagen}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <div className="container-title bg-transparent" style={estilodiv}><h1 style={estiloContainer}><strong>Alejandro González</strong></h1><h2 style={estiloContainer}><strong>Full Stack Developer</strong></h2></div>
                            <h5 className="card-title ms-1 " style={estiloLetra}>
                                Desarrollador Full Stack con conocimientos
                                en React y Python (con Flask). Estudié en el
                                bootcamp de 4Geeks Academy el cuál me
                                dió la oportunidad de volver a lo siempre
                                me gusto, la programación. Mi principal
                                foco es continuar aprendiendo,
                                perfeccionando las tecnologías que conozco
                                y aprender tecnologías nuevas. En mi tiempo
                                libre me gusta jugar videojuegos o ver alguna
                                serie con una buena cerveza y a veces cuando
                                el ánimo da cocinar algo rico para acompañar
                                el buen momento.
                            </h5>
                            <p className="card-text">
                                <a className="btn btn-dark border-0 shadow rounded-3 overflow-hidden" href="#" style={estiloBoton}>Ver Curriculum</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default SobreMi;