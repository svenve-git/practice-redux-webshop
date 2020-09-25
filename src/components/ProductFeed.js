import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/products/actions"
import { selectProducts } from "../store/products/selectors"

export default function ProductFeed() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  console.log("in component:", products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <h1>The Feed...</h1>
    </div>
  )
}
