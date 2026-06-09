import { useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

import { MarketContext } from "../context/MarketContext";

function Favorites() {

    const { favorites } = useContext(MarketContext);

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h1 className="mb-4 text-center">
                     Mis Favoritos
                </h1>

                {
                    favorites.length === 0 ? (

                        <div className="alert alert-warning text-center">

                            No has agregado productos a favoritos.

                        </div>

                    ) : (

                        <ProductGrid products={favorites} />

                    )
                }

            </div>

            <Footer />

        </>

    );

}

export default Favorites;