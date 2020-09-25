import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/products/actions";

export default function ProductFeed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>The Feed...</h1>
    </div>
  );
}
