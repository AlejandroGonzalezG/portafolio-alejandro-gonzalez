import React from "react";

const estiloDiv = {
    marginRight: "200px",
    maxWidth: "540px"
}

const estiloBoton = {
    marginRight: "15px",
    marginTop: "5px",
    marginBottom: "10px",
    width: "200px",
    alignSelf: "center"
}

const Proyectos = () => {

    return (
        <>
            <div className="row card-group row-cols-md-2 py-5 mx-3 rounded">
                <div className="card mb-3 rounded" style={estiloDiv}>
                    <div className="row">
                        <h3 className="card-title pe-0 text-center">Contador Simple</h3>
                        <div className="col-md-12 ps-0 text-center">
                            <img
                                src="https://i.ibb.co/H4zwxkr/simplecounter.png"
                                style={{
                                    maxHeight: 239,
                                    backgroundSize: "cover",
                                }}
                                className="img-card rounded"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-12 pe-0">
                            <div className="card-body col-12 text-center">
                                <p className="card-text">
                                    Proyecto que consiste en un contador simple creado en React utilizando hooks como setInterval.
                                </p>

                            </div>
                        </div>
                    </div>
                    <a href="https://counter-alejandro-gonzalez.vercel.app/" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Demo en vivo
                    </a>
                    <a href="https://github.com/AlejandroGonzalezG/counter" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Código
                    </a>
                </div>
                <div className="card mb-3 rounded " style={{ maxWidth: 540 }}>
                    <div className="row">
                        <h3 className="card-title pe-0 text-center">Semáforo Simple</h3>
                        <div className="col-md-12 ps-0 rounded text-center">
                            <img
                                src="https://i.ibb.co/WKVmgpG/trafficlight.png"
                                style={{
                                    maxHeight: 239,
                                    backgroundSize: "cover",
                                }}
                                className="img-card rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-12 pe-0">
                            <div className="card-body text-center">

                                <p className="card-text">
                                    Proyecto sobre un semáforo simple que utiliza hooks para su implementación.
                                </p>

                            </div>
                        </div>
                    </div>
                    <a href="https://traffic-light-alejandro-gonzalez.vercel.app/" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Demo en vivo
                    </a>
                    <a href="https://github.com/AlejandroGonzalezG/traffic-light-exercise" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Código
                    </a>
                </div>
            </div>
            <div className="row card-group row-cols-md-2 mx-3 rounded">
                <div className="card mb-3 rounded" style={estiloDiv}>
                    <div className="row justify-content-between">
                    <h3 className="card-title pe-0 text-center">Tic Tac Toe</h3>
                        <div className="col-md-12 col-xs-12 ps-0 text-center">
                            <img
                                src="https://i.ibb.co/cL9Hz32/tictactoe.png"
                                style={{
                                    maxHeight: "10.5rem",
                                    backgroundSize: "cover",
                                }}
                                className="img-card rounded-start "
                                alt="..." 
                            />
                        </div>
                        <div className="col-md-12 pe-0">
                            <div className="card-body col-12 text-center">
                                
                                <p className="card-text">
                                    Utilizando hooks con props en React se implementó un proyecto para poder jugar Tic Tac Toe entre 2 jugadores.
                                </p>

                            </div>
                        </div>
                    </div>
                    <a href="https://tic-tac-toe-alejandro-gonzalez.vercel.app/" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Demo en vivo
                    </a>
                    <a href="https://github.com/AlejandroGonzalezG/TicTacToe-ejercicio" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Código
                    </a>
                </div>
                <div
                    className="card mb-3 rounded"
                    style={{ maxWidth: 540 }}
                >
                    <div className="row card-group justify-content-between">
                    <h3 className="card-title text-center">Blog de Star Wars</h3>
                        <div className="col-md-12 ps-0 rounded text-center">
                            <img
                                src="https://i.ibb.co/3yGGHc8/blogstarwars.png"
                                style={{
                                    maxHeight: "10.3rem",
                                    backgroundSize: "cover",
                                }}
                                className="img-card rounded"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-12 pe-0">
                            <div className="card-body text-center">
                                
                                <p className="card-text">
                                    Blog de Star Wars usando la swapi. Se utilizan distintos hooks centralizados a través del Context.
                                </p>

                            </div>
                        </div>
                    </div>
                    <a href="https://blog-star-wars.vercel.app/" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Demo en vivo
                    </a>
                    <a href="https://github.com/AlejandroGonzalezG/blog-star-wars" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Código
                    </a>
                </div>
            </div>
            <div className="row card-group row-cols-md-2 py-5 mx-3 rounded">
                <div className="card mb-3 rounded offset-md-3 " style={{ maxWidth: 540 }}>
                    <div className="row">
                    <h3 className="card-title pe-0 text-center">Página de Registro y Login</h3>
                        <div className="col-md-12 ps-0 text-center">
                            <img
                                src="https://i.ibb.co/zmJGnny/login.png"
                                style={{
                                    maxHeight: "12.73rem",
                                    backgroundSize: "cover",
                                }}
                                className="img-card rounded"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-12 pe-0">
                            <div className="card-body col-12 text-center">
                                
                                <p className="card-text">
                                    Proyecto que consiste en un contador simple creado en React utilizando hooks como setInterval.
                                </p>

                            </div>
                        </div>
                    </div>
                    <a href="https://login-exercise-alejandro-gonzalez.vercel.app/" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Demo en vivo
                    </a>
                    <a href="https://github.com/AlejandroGonzalezG/login-exercise" target='blank' className="btn btn-primary" style={estiloBoton}>
                        Código
                    </a>
                </div>
            </div>

        </>
    )
};


export default Proyectos;