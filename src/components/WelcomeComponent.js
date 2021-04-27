import React, { Component } from "react"

class Welcome extends Component {
  render() {
    const welcome = this.props.foods.map((food) => {
      return (
        <div key={food.id} className="row row-content align-items-center">
          <div className="col-sm-4">
            <h2>{food.name}</h2>
            <p className="text-left">{food.text}</p>
            <button type="button" class="btn btn-lg btn-primary">
              Start Your Order
            </button>
          </div>
          <div className="col-sm">
            <img
              src={food.image}
              alt={food.name}
              className="food-pic img-fluid"
            />
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row">{welcome}</div>
      </div>
    )
  }
}

export default Welcome
