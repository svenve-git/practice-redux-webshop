import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/products/actions";
import { selectProducts } from "../store/products/selectors";
import { addToCart } from "../store/cart/action";

export default function ProductFeed() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            Name: <Link to={`/products/${product.id}`}>{product.name}</Link>{" "}
            Price: <span> €{product.price}</span>{" "}
            <button onClick={() => dispatch(addToCart())}>Add to cart</button>
            <br></br>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
