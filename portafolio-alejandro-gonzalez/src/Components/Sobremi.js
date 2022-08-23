import React, { useContext, useEffect } from "react";


const estiloJumbotron = {
    height: "70vh",
    display: "flex"
};

const estiloTitulo = {
    marginTop: "150px",
    fontSize: "47px"
};

const estiloTitulo2 = {
    marginTop: "70px",
    fontSize: "22px"
};

const estiloContainer = {
    width: "100%",
    margin: "0px",
    padding: "0px",
}

const estiloImagen = {
    marginTop: "80px",
    marginRight: "20px"
}

const estiloBoton = {
    marginTop: "80px"
}


const SobreMi = () => {

    return (
        <div className="container-fluid" style={estiloContainer}>
            <div className="row">
                <div className="col-xxxl-12">
                    <div className="jumbotron px-5 py-1" style={estiloJumbotron}>
                        <div className="col-xxl-5 col-md-5" style={estiloImagen}>
                            <img src="https://images.squarespace-cdn.com/content/v1/53daa37ce4b0f890bb843382/1421516330237-9GPRNWXZMLKB9X8CH2Y7/image-asset.jpeg" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-xxxl-7 col-md-5">
                            <h2 className="titulo" style={estiloTitulo}>
                                {" "}
                                Alejandro González{" "}
                                <span className="text-secondary ">Full Stack Developer</span>
                            </h2>
                            <div className="col-12">
                                <p className="titulo" style={estiloTitulo2}>
                                    {" "}
                                    Desarrollador Full Stack con conocimientos
                                    en React y Python (con Flask). Estudié en el
                                    bootcamp de 4Geeks Academy el cuál me
                                    dió la oportunidad de volver a lo siempre
                                    me gusto, la programación. Mi principal
                                    foco es continuar aprendiendo,
                                    perfeccionando las tecnologías que conozco
                                    y aprender tecnologías nuevas.{" "}
                                </p>
                            </div>
                            <a className="btn btn-primary" href="#" role="button">Ver Curriculum</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default SobreMi;