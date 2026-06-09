import { Link } from "react-router-dom";
import { useContext } from "react";

import { MarketContext } from "../context/MarketContext";

function Navbar() {

    const { user, logout, favorites } = useContext(MarketContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    TechMarket
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbar"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">
                                Productos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">
                                Favorito {favorites.length}
                            </Link>
                        </li>

                        {
                            user ? (

                                <>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/create"
                                        >
                                            Publicar
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/profile"
                                        >
                                            Perfil
                                        </Link>
                                    </li>

                                    <li className="nav-item">

                                        <button
                                            className="btn btn-danger ms-2"
                                            onClick={logout}
                                        >
                                            Salir
                                        </button>

                                    </li>

                                </>

                            ) : (

                                <>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/login"
                                        >
                                            Login
                                        </Link>

                                    </li>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/register"
                                        >
                                            Registro
                                        </Link>

                                    </li>

                                </>

                            )
                        }

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;