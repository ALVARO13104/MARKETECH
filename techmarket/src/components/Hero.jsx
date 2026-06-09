import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="hero">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <h1>

                            Compra y Venta de Tecnología

                        </h1>

                        <p>

                            Publica y encuentra notebooks,
                            procesadores, tarjetas gráficas,
                            periféricos y mucho más.

                        </p>

                        <Link
                            to="/gallery"
                            className="btn btn-warning btn-lg mt-4"
                        >
                            Explorar Productos
                        </Link>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700"
                            className="img-fluid rounded"
                            alt="Hero"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;