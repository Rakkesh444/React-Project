import React from "react";
import NavBar from "../../Layouts/Nav";
import './CSS/Home.css'
import Logo from "../../Asset/Logo.png";
import { Link } from "react-router-dom";
function HomePage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid px-5">
                    {/* Logo */}
                    <Link href="" className="navbar-brand"><img src={Logo} width="50" height="50" /></Link>
                    {/* Menu Btn */}
                    <button type="button" className="navbar-toggler" data-bs-target="#nav" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Menu Links */}
                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link to="" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="#Product" className="nav-link">Products</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">Groups</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
            <main>
                {/* HOME PAGE */}
                <section className="container text-light Home-Page">
                    <div className="Home-Content text-center">
                        <h1 className="display-1">Vairaa Official</h1>
                        <h3 className="Coders fw-bold">Coders</h3>
                        <p className="Para1">Vairaa Study Circle for Self Learners</p>
                    </div>
                </section>
                {/* PRODUCTS PAGE */}
                <section className="container-fluid Product-Page" id="Product">
                    <Link to="" className="btn Product-Btn">Products</Link>
                </section>
            </main>

        </>
    )
}
export default HomePage;