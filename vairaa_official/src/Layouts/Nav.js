import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                {/* Logo */}
                <Link href="" className="navbar-brand">Vairaa</Link>
            </div>

        </nav>
    )
}