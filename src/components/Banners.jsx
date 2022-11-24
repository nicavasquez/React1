import React from "react";

const Banners = () => {
    return (
        <div className="container ">
            <div className="row gx-5 mb-5 gap-5">
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded " >
                    <p><img src="images/pizzas.png" alt="pizzas" className="img-fluid " /></p>
                    <h4>Conocenos!</h4>
                    <p><a href="www.cadena3.com" target="_blank" className="btn btn-primary">Ver Más</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded ">
                    <p><img src="images/pizza especial.png" alt="Especial" className="img-fluid" /></p>
                    <h4>Entra y disfruta de nuestros productos</h4>
                    <p>Ahora disponible para compra online</p>
                    <p><a href="www.ole.com.ar" target="_blank" className="btn btn-primary">Ver Más</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;