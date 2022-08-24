import React from "react";

const estiloLetra = {
    color: "#FFFFFF"
}

const estiloCard = {
    backgroundColor: (245, 245, 245, 1),
    opacity: "0"
}
const Herramientas = () => {

    return (
        <>
            <h1 className="texto text-center" style={estiloLetra}>Herramientas</h1>
            <div className="container mb-3 rounded">
                <div className="row my-5">
                    <div className="col-sm-4 col-md-2 col-4 my-4">
                        <img
                            src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png"
                            style={{
                                maxWidth: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="col-sm-4 col-md-2 col-4 my-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="col-sm-4 col-md-2 col-4 my-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="col-sm-4 col-md-2 col-4 my-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="col-sm-4 col-md-2 col-4 my-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="col-sm-4 col-md-2 col-4 my-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
            <div className="container mb-3 rounded">
                <div className="row my-5">
                    <div className="col-sm-3 col-md-4 col-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png"
                            style={{
                                maxWidth: 90,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="offset-1 col-sm-4 col-md-3 col-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/337/337953.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                    <div className="offset-1 offset-md-2 col-sm-3 col-md-2 col-3">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/flask.svg"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}




export default Herramientas