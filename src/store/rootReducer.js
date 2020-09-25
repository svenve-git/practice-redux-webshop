import { combineReducers } from "redux"
import { productSliceReducer } from "./products/reducer"

const reducer = combineReducers({
  products: productSliceReducer,
})

export default reducer
