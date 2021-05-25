import SetRange from "./SetRange"
import MakeGuess from "./MakeGuess"
import Button from "./Button"
import Score from "./Score"
import "./App.css"

function App() {

  const setRange = (lowerBound, upperBound) => {
    console.log(lowerBound, upperBound)
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <SetRange setRange={setRange}/>
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
