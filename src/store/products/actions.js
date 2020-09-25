export const startLoading = (payload) => ({
  type: "START_LOADING",
})

export const productsFetched = (payload) => ({
  type: "PRODUCTS_FETCHED",
  payload,
})
