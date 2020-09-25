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
    const response = await axios.get("http://localhost:4000/products");
    console.log("response:", response);
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
