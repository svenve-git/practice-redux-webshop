import { combineReducers } from "redux";
import { productSliceReducer } from "./products/reducer";
import cartItemSlice from "./cart/reducer";

const reducer = combineReducers({
  products: productSliceReducer,
  items: cartItemSlice,
});

export default reducer;
