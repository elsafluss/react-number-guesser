import React, { useState } from "react"

const MakeGuess = () => {
  const [player1Name, setPlayer1Name] = useState("")
  const [player2Name, setPlayer2Name] = useState("")

  const handleChange = (event) => {
      if(event.target.name === "player1") {
          setPlayer1Name(event.target.value)
      } else {
          setPlayer2Name(event.target.value)
      }
  }

  const getInputs = (event) => {
      event.preventDefault()
    console.log('guess')
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
