import "../styles/EndScreen.css"
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions"


export default function EndScreen() {
    const { score, setScore, setGameState, username } = useContext(GameStateContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };
    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{username}</h3>
            <h1>{score} / {Questions.length}</h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};