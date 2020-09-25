import axios from "axios";

export const startLoading = (payload) => ({
  type: "START_LOADING",
});

export const productsFetched = (payload) => ({
  type: "PRODUCTS_FETCHED",
  payload,
});

export function getProducts() {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading);
    const response = await axios.get("http://localhost:4000/products");
    const products = response.data;
    console.log("products:", products);
    dispatch(productsFetched(products));
  };
}

/* export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost())

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(${API_URL}/posts/${id}),
      axios.get(${API_URL}/posts/${id}/comments),
    ])

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    )
  }
} */
