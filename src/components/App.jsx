import '../styles/App.css'
import Menu from "./Menu"
import { useState } from "react";
import {GameStateContext} from "../helpers/Contexts"
import Quiz from "./Quiz"
import EndScreen from './EndScreen';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState, username, setUsername, score, setScore}}>
      {gameState === "menu" &&  <Menu />}
      {gameState === "playing" && <Quiz/>}
      {gameState === "finished" && <EndScreen/>}
      </GameStateContext.Provider>
    </>
  )
}

export default App;
