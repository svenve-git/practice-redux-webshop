# Webshop project

## User stories

- As a customer, I want to see an overview of the products available, sort
  them by price or popularity, and filter them by some meaningful distinction
  (for example "tag" or "category")

- As a customer, I want to always be able to see the amount of products in my
  "shopping cart" (i.e. on every page), and quickly navigate to the shopping cart page

- As a customer, I want to see whether (and if so, how many times) I’ve added
  a product to my cart, near the relevant products wherever these are shown
  (e.g. on the homepage or a product page)

- As a customer, I want to get more information on a product on a product-specific
  page

- As a customer, I want to be able to view my shopping cart, which products
  are in it, how many times, and what total price that adds up to. I also want to
  be able to adjust the number of items in that page, and to be able to empty
  the whole cart.

  ## Theme

  Ice sculptures
  _Because beauty is in the ice of the beholder_
  Special: Thin ice (buy now! stock is dwindling)

  ## Structure of the Webshop

  Pages:

  - HomePage
  - ProductPage
  - CartPage

  Components:

  - Header / Toolbar
  - ProductsList
  - Product
  - Cart

  Routes

  - /
  - /products/:productid
  - /tags/:tagid
  - /cart

  ## Structure of the Redux store

  Slices:

  - auth
    - actions
      - userLoggedIn
      - Thunk: login
      - Thunk: bootstrapLogin
      - Thunk: logout
    - reducer
    - selectors
      - selectUserLoggedIn
  - products
    - actions
      - startLoading
      - productsFetched
      - optional: limit+offset => fetchNext##Products
    - reducer
    - selectors
      - selectProductsLoading
      - selectProductsFetched
  - productPage
    - actions
      - startLoadingProduct
      - productFullyFetched
      - Thunk: fetchProduct
      - addToCart
      - removeFromCart
    - reducer
    - selectors
      - selectProductAndTags
  - cartPage
    - actions
      - addToCart
      - removeFromCart
    - reducer
    - selectors
