import React, { Component } from "react"
import { Navbar, NavbarBrand } from "reactstrap"
import Welcome from "./components/WelcomeComponent"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Neon Burger</NavbarBrand>
          </div>
        </Navbar>
        <Welcome />
      </div>
    )
  }
}

export default App
