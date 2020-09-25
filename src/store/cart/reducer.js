const initialState = {
  numCartItems: 0,
};

export default function cartItemSlice(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_ITEMS_TO_CART": {
      return {
        ...state,
        numCartItems: state.numCartItems + 1,
      };
    }
    default:
      return state;
  }
}
