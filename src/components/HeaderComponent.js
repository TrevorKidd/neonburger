import React, { Component } from "react"
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap"

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Home</NavbarBrand>
          </div>
        </Navbar>

        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Neon Burger</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    )
  }
}

export default Header
