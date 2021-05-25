import SetRange from "./SetRange"
import MakeGuess from "./MakeGuess"
import Button from "./Button"
import Score from "./Score"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <SetRange />
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
