import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { selectProductDetails } from "../store/productPage/selectors"
import { getProducts } from "../store/products/actions"

export default function ProductDetails() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const { id } = useParams()
  console.log("producId", id)
  const product = useSelector(selectProductDetails(id))
  console.log("hope this works:", product)

  return (
    <div>
      {product.map((p) => {
        return (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>€ {p.price}</p>
            <p>Details...</p>
          </div>
        )
      })}
    </div>
  )
}
