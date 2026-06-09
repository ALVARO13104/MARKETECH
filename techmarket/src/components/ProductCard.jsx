import { Link } from "react-router-dom";
import { useContext } from "react";
import { MarketContext } from "../context/MarketContext";

function ProductCard({ product }) {

  const { addFavorite } = useContext(MarketContext);

  return (

    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{
            height: "220px",
            objectFit: "cover"
          }}
        />

        <div className="card-body d-flex flex-column">

          <span className="badge bg-secondary mb-2">
            {product.category}
          </span>

          <h5 className="card-title">
            {product.title}
          </h5>

          <p className="text-muted flex-grow-1">
            {product.description}
          </p>

          <h4 className="text-success fw-bold mb-3">

            ${product.price.toLocaleString("es-CL")}

          </h4>

          <Link
            to={`/detail/${product.id}`}
            className="btn btn-primary w-100 mb-2"
          >
            Ver Producto
          </Link>

          <button
            className="btn btn-outline-danger w-100"
            onClick={() => addFavorite(product)}
          >
             Agregar a Favoritos
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductCard;