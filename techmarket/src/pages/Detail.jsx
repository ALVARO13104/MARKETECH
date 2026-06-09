import { useContext } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MarketContext } from "../context/MarketContext";

function Detail() {

    const { id } = useParams();

    const { products } = useContext(MarketContext);

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <>
                <Navbar />

                <div className="container mt-5">

                    <h2>Producto no encontrado</h2>

                </div>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="row">

                    <div className="col-lg-6">

                        <img
                            src={product.image}
                            className="img-fluid rounded shadow"
                            alt={product.title}
                        />

                    </div>

                    <div className="col-lg-6">

                        <h2>{product.title}</h2>

                        <h3 className="text-success mt-3">

                            ${product.price.toLocaleString("es-CL")}

                        </h3>

                        <p className="mt-4">

                            Categoría:
                            <strong> {product.category}</strong>

                        </p>

                        <p>

                            Producto publicado en TechMarket.

                            Disponible para entrega inmediata.

                        </p>

                        <button className="btn btn-success">

                            Agregar a Favoritos

                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );

}

export default Detail;