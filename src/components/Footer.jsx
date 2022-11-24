import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="mx-1" ><img src="images/logowsp.png" alt="logofb"  /></a>
                    <a href="#" className="mx-1"><img src="images/logoig.png" alt="logoig"/></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <a href="https://apps.apple.com/ar/app/mcdonalds-app/id1114009187" target="_blank" className="mx-1"><img src="images/logo.png" alt="App Store" width="115" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=es_AR" target="_blank" className="mx-1"><img src="images/pizza.png" alt="Play Store" width="129" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav nav">
                        <li className="nav-item">
                            <a className="nav-link text-black " href="" target="_blank">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="" target="_blank">Recetas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="" target="_blank">Promos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="" target="_blank">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="images/logo.png" alt="logo sf" width="40" /> © Pedidos Online</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;