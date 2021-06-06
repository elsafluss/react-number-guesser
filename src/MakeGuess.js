import React, { useState } from "react"

const MakeGuess = () => {
  const [player1Name, setPlayer1Name] = useState("")
  const [player2Name, setPlayer2Name] = useState("")
  const [guessPlayer1, setGuessPlayer1] = useState(0)
  const [guessPlayer2, setGuessPlayer2] = useState(0)

  const handleChange = (event) => {
    if (event.target.name === "player1") {
      setPlayer1Name(event.target.value)
    } else if (event.target.name === "player2") {
      setPlayer2Name(event.target.value)
    } else if (event.target.name === "guessPlayer1") {
      setGuessPlayer1(event.target.value)
    } else if (event.target.name === "guessPlayer2") {
      setGuessPlayer2(event.target.value)
    }
  }

  const getInputs = (event) => {
    event.preventDefault()
    // check guesses against the target number
    // display guesses with names
    console.log(player1Name)
    console.log(player2Name)
    console.log(guessPlayer1)
    console.log(guessPlayer2)
    setGuessPlayer1(0)
    setGuessPlayer2(0)
  }

  return (
    <>
      <form>
        <label>challenger 1 </label>
        <input
          type="text"
          name="player1"
          value={player1Name}
          onChange={(event) => handleChange(event)}
          placeholder="name"
        ></input>
        <label>challenger 2 guess</label>
        <input
          type="number"
          name="guessPlayer1"
          value={guessPlayer1}
          onChange={(event) => handleChange(event)}
        ></input>
        <br></br>
        <br></br>
        <label>challenger 2 </label>
        <input
          type="text"
          name="player2"
          value={player2Name}
          onChange={(event) => handleChange(event)}
          placeholder="name"
        ></input>
        <label>challenger 2 guess</label>
        <input
          type="number"
          name="guessPlayer2"
          value={guessPlayer2}
          onChange={(event) => handleChange(event)}
        ></input>
        <br></br>
        <br></br>
        <button type="submit" onClick={(event) => getInputs(event)}>
          Make Guess
        </button>
      </form>
    </>
  )
}

export default MakeGuess
