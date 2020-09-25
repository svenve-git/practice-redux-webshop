import React from "react"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import "./App.css"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
    </div>
  )
}

export default App
