import { useContext } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

import { MarketContext } from "../context/MarketContext";

function Home() {

  const { products } = useContext(MarketContext);

  return (
    <>
      <Navbar />

      <Hero />

      <div className="container mt-5">

        <h2 className="text-center fw-bold mb-4">
          Productos Destacados
        </h2>
     <div className="text-center mb-5">

       <h2>

         Productos Destacados

       </h2>

     <p>

        Explora las publicaciones más recientes.

    </p>

</div>
        <ProductGrid products={products} />

      </div>

      <Footer />
    </>
  );
}

export default Home;