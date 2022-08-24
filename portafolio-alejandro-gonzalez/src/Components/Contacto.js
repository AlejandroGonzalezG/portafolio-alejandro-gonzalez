import React from "react";

const estiloLetra = {
    color: "#FFFFFF",
    marginBottom: "40px",
    marginTop: "50px"
}


const estiloDiv ={
    textAlign: "center"
}

const estiloCard = {
    marginTop: "7%"
}

const Contacto = () => {

    return (
        <>
            <h1 className="texto text-center" style={estiloLetra}>Contacto</h1>
            <div className="container rounded" style={estiloCard}>
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-12 my-4 " style={estiloDiv}>
                        <a href="mailto:ale.gonzalez.gut@gmail.com" target="blank">
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                            style={{
                                maxWidth: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        /></a>
                    </div>
                    <div className="col-sm-4 col-md-3 col-12 my-4" style={estiloDiv}>
                        <a href="https://wa.me/569901813" target="blank"> 
                        <img
                            src="https://images.vexels.com/media/users/3/157620/isolated/lists/28323eba1d9f71acc3cc92f0e043fc5c-icono-de-telefono-blanco-y-negro.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        /></a>
                    </div>
                    <div className="col-sm-4 col-md-3 col-12 my-4" style={estiloDiv}>
                        <a href="https://github.com/AlejandroGonzalezG" target="blank">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        /></a>
                    </div>
                    <div className="col-sm-4 col-md-3 col-12 my-4" style={estiloDiv}>
                        <a href="https://linkedin.com/in/alejandro-moises-gonzalez" target="blank">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            style={{
                                maxHeight: 80,
                            }}
                            className="img-card rounded"
                            alt="..."
                        /></a>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Contacto;


