import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./item.css";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`;

  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        ♥
      </button>
      <div className="card-img">
        <img src={product.img} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <Button>Ver más!</Button>
      </Link>
    </div>
  );
}

export default Item;