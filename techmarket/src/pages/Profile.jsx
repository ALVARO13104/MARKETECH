import { useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MarketContext } from "../context/MarketContext";

function Profile() {

    const { user, logout } = useContext(MarketContext);

    if (!user) {

        return (

            <>
                <Navbar />

                <div className="container mt-5">

                    <h2>No has iniciado sesión.</h2>

                </div>

                <Footer />

            </>

        );

    }

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>{user.name}</h2>

                        <p>{user.email}</p>

                        <button
                            className="btn btn-danger"
                            onClick={logout}
                        >

                            Cerrar Sesión

                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Profile;