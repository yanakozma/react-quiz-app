import "../styles/Menu.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export default function Menu() {
    const { setGameState, setUsername } = useContext(GameStateContext)
    return (
        <div className="Menu">
            <label htmlFor="name">Enter Your Name:</label>
            <input id="name" type="text" placeholder="Ex. John Smith" onChange={(evt) => setUsername(evt.target.value)} />
            <button
                onClick={() => {
                    setGameState("playing")
                }}>
                Start Quiz
            </button>
        </div>
    );
}