import "../styles/Quiz.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [buttonNum, setButtonNum] = useState("");
    const [isNotSelected, setIsNotSelected] = useState(false);

    const { setScore, setGameState } = useContext(GameStateContext);

    const chooseOption = (evt, option) => {
        setOptionChosen(option);
        setButtonNum(evt.target.name)
    };

    const nextQuestion = () => {
        setButtonNum("");
        if (optionChosen) {
            if (Questions[currentQuestion].answer === optionChosen) {
                setScore((currScore) => currScore + 1);
                setCurrentQuestion((currValue) => currValue + 1);
                setOptionChosen("");
                setIsNotSelected(false);
            } else {
                setCurrentQuestion((currValue) => currValue + 1);
                setOptionChosen("");
                setIsNotSelected(false);
            }
        } else {
            setIsNotSelected(true);
        }
    };
    const finishQuiz = () => {
        if (optionChosen) {
            if (Questions[currentQuestion].answer === optionChosen) {
                setScore((currScore) => currScore + 1);
                setGameState("finished");
            } else {
                setGameState("finished");
            }
        } else {
            setIsNotSelected(true);
        }
    };

    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            {isNotSelected && <h3>Select one of the following options to continue</h3>}
            <div className="Quiz-questions">
                <button
                    style={{
                        backgroundColor: buttonNum === "first" ? "black" : "",
                        color: buttonNum === "first" ? "white" : ""
                    }}
                    name="first"
                    onClick={(evt) => chooseOption(evt, "optionA")}
                >
                    {Questions[currentQuestion].optionA}
                </button>
                <button
                    style={{
                        backgroundColor: buttonNum === "second" ? "black" : "",
                        color: buttonNum === "second" ? "white" : ""
                    }}
                    name="second"
                    onClick={(evt) => chooseOption(evt, "optionB")}
                >
                    {Questions[currentQuestion].optionB}
                </button>
                <button
                    style={{
                        backgroundColor: buttonNum === "third" ? "black" : "",
                        color: buttonNum === "third" ? "white" : ""
                    }}
                    name="third"
                    onClick={(evt) => chooseOption(evt, "optionC")}
                >
                    {Questions[currentQuestion].optionC}
                </button>
                <button
                    style={{
                        backgroundColor: buttonNum === "fourth" ? "black" : "",
                        color: buttonNum === "fourth" ? "white" : ""
                    }}
                    name="fourth"
                    onClick={(evt) => chooseOption(evt, "optionD")}
                >
                    {Questions[currentQuestion].optionD}
                </button>
            </div>
            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} id="nextQuestion">Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion} id="nextQuestion">Next Question</button>
            )}

        </div>
    )
}