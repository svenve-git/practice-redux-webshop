import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/products/actions"
import { selectProducts } from "../store/products/selectors"

export default function ProductFeed() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {product.name}
            <span> €{product.price}</span>
          </div>
        )
      })}
    </div>
  )
}
