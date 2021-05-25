import React, { Component } from "react"

class SetRange extends Component {
  constructor() {
    super()
    this.state = {
      lowerBound: 0,
      upperBound: 999,
      error: "",
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: Number(event.target.value) })
    this.setState({ error: "" })
  }

  getRange = (event) => {
    event.preventDefault()
    if (this.state.lowerBound === this.state.upperBound) {
      this.setState({
        error: "Please choose numbers that are different from one another.",
      })
    }
    if (this.state.lowerBound > this.state.upperBound) {
      this.setState({
        error:
          "Please choose a lower bound that is lower than the upper bound.",
      })
    }
    this.props.setRange(this.state.lowerBound, this.state.upperBound, this.state.error)
  }

  render() {
    return (
      <>
        <form>
          <label>Lower Bound </label>
          <input
            type="number"
            name="lowerBound"
            value={this.state.lowerBound}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <br></br>
          <label>Upper Bound </label>
          <input
            type="number"
            name="upperBound"
            value={this.state.upperBound}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <br></br>
          <br></br>
          <button type="submit" onClick={this.getRange}>
            Set Range
          </button>
        </form>
        <error>{this.state.error}</error>
      </>
    )
  }
}

export default SetRange
