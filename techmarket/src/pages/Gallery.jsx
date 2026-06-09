import { useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

import { MarketContext } from "../context/MarketContext";

function Gallery() {

  const { products } = useContext(MarketContext);

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-5">
          Catálogo de Productos
        </h1>

        <ProductGrid products={products} />

      </div>

      <Footer />
    </>
  );
}

export default Gallery;