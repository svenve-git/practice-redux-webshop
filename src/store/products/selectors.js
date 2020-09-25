export const selectProducts = (state) => {
  console.log("in selector: ", state)
  return state.products.productsList
}
