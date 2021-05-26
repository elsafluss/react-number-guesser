import React, { useState } from "react"

const SetRange = ({ getRange }) => {
  const [lowerBound, setLowerBound] = useState(0)
  const [upperBound, setUpperBound] = useState(999)

  const handleChange = (event) => {
    if (event.target.name === "lowerBound") {
      setLowerBound(Number(event.target.value))
    } else {
      setUpperBound(Number(event.target.value))
    }
  }

  const getInputs = (event) => {
    event.preventDefault()
    getRange(lowerBound, upperBound)
    
  }

  return (
    <>
      <form>
        <label>Lower Bound </label>
        <input
          type="number"
          name="lowerBound"
          value={lowerBound}
          onChange={(event) => handleChange(event)}
        ></input>
        <br></br>
        <label>Upper Bound </label>
        <input
          type="number"
          name="upperBound"
          value={upperBound}
          onChange={(event) => handleChange(event)}
        ></input>
        <br></br>
        <br></br>
        <button type="submit" onClick={(event) => getInputs(event)}>
          Set Range
        </button>
      </form>
    </>
  )
}

export default SetRange
