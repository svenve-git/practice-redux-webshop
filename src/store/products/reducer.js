const initialState = {
  loading: true,
  productsList: [],
}

export function productSliceReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      }
    }
    case "PRODUCTS_FETCHED": {
      console.log("in reducer:", state, "payload:", payload)
      return {
        ...state,
        loading: false,
        productsList: payload,
      }
    }
    default:
      return state
  }
}
