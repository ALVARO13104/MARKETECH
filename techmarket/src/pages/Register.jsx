import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("Usuario registrado correctamente");

        navigate("/login");

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

                                    Registro

                                </h2>

                                <form onSubmit={handleSubmit}>

                                    <input
                                        className="form-control mb-3"
                                        placeholder="Nombre"
                                        name="name"
                                        onChange={handleChange}
                                    />

                                    <input
                                        className="form-control mb-3"
                                        placeholder="Correo"
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                    />

                                    <input
                                        className="form-control mb-3"
                                        placeholder="Contraseña"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                    />

                                    <button
                                        className="btn btn-success w-100"
                                    >
                                        Registrarse
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

export default Register;