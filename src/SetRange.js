import React, { Component, useState, useEffect } from "react"

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

  getRange = (event) => {
      event.preventDefault()
      this.props.setRange(this.state.lowerBound, this.state.upperBound)
  }

  render() {
    return (
      <form>
        <label>Lower Bound</label>
        <input type="number" name="lowerBound" value={this.state.lowerBound} onChange={(event) => this.handleChange(event)}></input>
        <label>Upper Bound</label>
        <input type="number" name="upperBound" value={this.state.upperBound} onChange={(event) => this.handleChange(event)}></input>
        <button type="submit" onClick={this.getRange}>Set Range</button>
      </form>
    )
  }
}

export default SetRange
