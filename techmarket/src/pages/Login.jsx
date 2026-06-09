import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MarketContext } from "../context/MarketContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(MarketContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        login(email);

        navigate("/profile");

    };

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow">

                            <div className="card-body">

                                <h2 className="text-center mb-4">

                                    Iniciar Sesión

                                </h2>

                                <form onSubmit={handleSubmit}>

                                    <input
                                        className="form-control mb-3"
                                        type="email"
                                        placeholder="Correo"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <input
                                        className="form-control mb-3"
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <button
                                        className="btn btn-primary w-100"
                                    >
                                        Ingresar
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Login;