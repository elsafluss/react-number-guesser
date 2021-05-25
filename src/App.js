import React, { Component } from "react"
import SetRange from "./SetRange"
import MakeGuess from "./MakeGuess"
import Button from "./Button"
import Score from "./Score"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      bounds: []
    }
  }

  setRange = (lowerBound, upperBound) => {
    console.log(lowerBound, upperBound)
    this.setState({ bounds: [lowerBound, upperBound] })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <SetRange setRange={this.setRange} />
        {this.state.bounds.length === 2 ? <p>Your guess should be between {this.state.bounds[0]} and {this.state.bounds[1]}.</p> : <p>Please set the lower and upper bounds.</p>}
        <MakeGuess />
        <MakeGuess />
        <Button />
        <Button />
        <Button />
        <Score />
      </div>
    )
  }
}

export default App
