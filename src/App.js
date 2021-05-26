import React, { useState, useEffect } from "react"
import SetRange from "./SetRange"
import MakeGuess from "./MakeGuess"
import Button from "./Button"
import Score from "./Score"
import "./App.css"

const App = () => {
  const [lowerBound, setLowerBound] = useState(0)
  const [upperBound, setUpperBound] = useState(999)
  const [bounds, setBounds] = useState([])
  const [error, setError] = useState("")
  // const [range, setRange] = useState([])

  useEffect(() => {
    getRange(lowerBound, upperBound)
  })

  const getRange = (lowerBound, upperBound) => {

    console.log(lowerBound, upperBound)

    if (lowerBound === upperBound) {
      setError("Please choose numbers that are different from one another.")
    } else if (lowerBound > upperBound) {
      setError(
        "Please choose a lower bound that is lower than the upper bound."
      )
    } else {
      setLowerBound(lowerBound)
      setUpperBound(upperBound)
      setBounds(lowerBound, upperBound)
    }
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <SetRange getRange={getRange} />
      {(bounds.length !== 2) & (error !== "") ? (
        <p>
          Your guess should be between {lowerBound} and {upperBound}.
        </p>
      ) : (
        <p>Please set the lower and upper bounds.</p>
      )}
      <p>{error}</p>
      <MakeGuess />
      <MakeGuess />
      <Button />
      <Button />
      <Button />
      <Score />
    </div>
  )
}

export default App
