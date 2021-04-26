import React, { Component } from "react"

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: [
        {
          id: 0,
          name: "burger",
          image: "assets/images/burger1.jpg",
          text: "burger burger yum yum yum eat burger eat yum",
        },
        {
          id: 1,
          name: "fries",
          image: "assets/images/french-fries-2.jpg",
          text: "fry guys murdered grimace with a machete",
        },
        {
          id: 2,
          name: "milkshake",
          image: "assets/images/milkshake.jpg",
          text: "my milkshake brings all the pizzas to the parking lot",
        },
      ],
    }
  }

  render() {
    const welcome = this.state.foods.map((food) => {
      return (
        <div key={food.id} className="col">
          <img src={food.image} alt={food.name} />
          <h2>{food.name}</h2>
          <p>{food.description}</p>
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
