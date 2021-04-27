import React, { Component } from "react"
import { Navbar } from "reactstrap"
import Welcome from "./WelcomeComponent"
import { FOODS } from "../shared/foods"

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: FOODS,
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div>
            <h1 className="logo-text" href="/">
              Neon Burger
            </h1>
          </div>
        </Navbar>
        <Welcome className="container" foods={this.state.foods} />
      </div>
    )
  }
}

export default Main
