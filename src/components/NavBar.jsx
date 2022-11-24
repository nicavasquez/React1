import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="images/logo.png" alt="SF" width="55" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse br" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-black" aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Pizzas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Lomitos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Empanadas</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;