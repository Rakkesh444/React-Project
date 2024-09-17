import { Link } from "react-router-dom";
import "./CSS/Nav.css";
import Logo from "../Asset/Logo.png";
export default function NavBar() {
    return (
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
                        <li className="nav-item"><Link to="" className="nav-link">Products</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link">Groups</Link></li>
                        <li className="nav-item"><Link to="" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}