import { useEffect, useState } from "react";
import "./style.css"
import Template from "./components/template"
import ButtonItem from "./buttonItem"
function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Lets see who is win");
  const [gameOver, setGameOver] = useState(false);



  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === "rockscissors" || comboMoves === "paperrock" || comboMoves === "scissorspaper") {
        const increaseUserPoints = userPoints + 1;
        setUserPoints(increaseUserPoints)
        setTurnResult('user got a points')
        if (increaseUserPoints === 5) {
          setGameOver(true)
          setResult("congratulation , USER win the game....")

        }
      }

      if (comboMoves === "scissorsrock" || comboMoves === "rockpaper" || comboMoves === "paperscissors") {
        const increaseComputerPoints = computerPoints + 1;
        setComputerPoints(increaseComputerPoints)
        setTurnResult("computer got a point")
        if (increaseComputerPoints === 5) {
          setGameOver(true)
          setResult("congratulation , computer win the game...")

        }
      }
    }
    if (comboMoves === "rockrock" || comboMoves === "paperpaper" || comboMoves === "scissorsscissors") {
      setTurnResult("No one got a Point try again")
    }
  }, [userChoice, computerChoice]

  )


  return (
    <div className="App">

      <Template userChoice={userChoice} computerChoice={computerChoice} userPoints={userPoints} computerPoints={computerPoints} />

      <ButtonItem gameOver={gameOver} setComputerChoice={setComputerChoice} setUserChoice={setUserChoice} />


      <div className="result">
        <h1>Turn Result : {turnResult}</h1>
        <h1>Final Result : {result}</h1>
      </div>

    </div>
  );
}

export default App;