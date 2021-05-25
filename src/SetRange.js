import React, { Component } from "react"

class SetRange extends Component {
  constructor() {
    super()
    this.state = {
      lowerBound: 0,
      upperBound: 999
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: Number(event.target.value) })
  }

  render() {
      let lowerBound = this.state.lowerBound
      let upperBound = this.state.upperBound

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
          <button
            type="submit"
            onSubmit={this.props.setRange(lowerBound, upperBound)}
          >
            Set Range
          </button>
        </form>
        <p>{this.state.error}</p>
      </>
    )
  }
}

export default SetRange
