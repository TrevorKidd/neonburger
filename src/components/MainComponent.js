import React, { Component } from "react"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
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
        <Header />
        <Welcome className="container" foods={this.state.foods} />
        <Footer />
      </div>
    )
  }
}

export default Main
