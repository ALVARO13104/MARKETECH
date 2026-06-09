import { useContext, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MarketContext } from "../context/MarketContext";

function CreatePublication() {

    const { products, setProducts } = useContext(MarketContext);

    const [product, setProduct] = useState({

        title: "",
        description: "",
        category: "",
        price: "",
        image: ""

    });

    const handleChange = (e) => {

        setProduct({

            ...product,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        setProducts([

            ...products,

            {

                id: products.length + 1,

                ...product

            }

        ]);

        alert("Producto publicado");

    };

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>Nueva Publicación</h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                className="form-control mb-3"
                                placeholder="Título"
                                name="title"
                                onChange={handleChange}
                            />

                            <textarea
                                className="form-control mb-3"
                                placeholder="Descripción"
                                name="description"
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Categoría"
                                name="category"
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Precio"
                                name="price"
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="URL Imagen"
                                name="image"
                                onChange={handleChange}
                            />

                            <button
                                className="btn btn-primary"
                            >
                                Publicar
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CreatePublication;