export const selectProductDetails = (id) => (state) => {
  console.log("in selector:", id, state)
  return state.products.productsList.filter(
    (product) => product.id === parseInt(id)
  )
}
