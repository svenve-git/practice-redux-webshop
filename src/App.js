import React from "react"
import HomePage from "./pages/HomePage"
import "./App.css"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={HomePage} />
      </Switch>
      <homePage />
    </div>
  )
}

export default App
