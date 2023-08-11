import React from "react";
import AppTitle from "../Components/AppTitle/AppTitle";
import GamePoint from "../Components/GamePoint/GamePoint";
import CloseButton from "../Components/CloseButton/CloseButton";
import QuizTitle from "../Components/QuizTitle/QuizTitle";
import AnswerButton from "../Components/AnswerButton/AnswerButton";
import SubmitButton from "../Components/SubmitButton/SubmitButton";
import GameProgress from "../Components/GameProgress/GameProgress";
import database from "../data/question_database"
import "./Game.css"

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MainAppTiitle: "Iran Explorer",
            SubmitButtonTitle: "next",
            initalGamePoint: 100,
            pointPerCurrectAnswer: 100,
            initialStep: 0,
            totalSteps: database.length,
            // submit button
            submitButtonStatusDeactive: false,
            // asnwer button status
            statusOfOption1: "none", // none || currect || wrong
            statusOfOption2: "none", // none || currect || wrong
            statusOfOption3: "none", // none || currect || wrong
            statusOfOption4: "none", // none || currect || wrong
            // score board show statsu
            isShowScoreBoard: false,
            // isCurrect
            isCurrect: false,
            // socre board counter
            correctAnswerCount: 0,
        }
    }
    // Handle Answer Button
    handleAnswerButton(valueFromBind, mainOptionButtonID) {
        // console.log("click on answer button")
        const optionID = mainOptionButtonID
        const userAnswer = valueFromBind
        const correctAnswer = database[this.state.initialStep].correctAnswer

        if (userAnswer === correctAnswer) {
            this.setState({
                statusOfOption1: optionID === 1 ? "currect" : "none",
                statusOfOption2: optionID === 2 ? "currect" : "none",
                statusOfOption3: optionID === 3 ? "currect" : "none",
                statusOfOption4: optionID === 4 ? "currect" : "none",
                // ----------------- //
                isCurrect: true,
                // score board counter
                correctAnswerCount: this.state.correctAnswerCount + 1,
            })
        } else {
            this.setState({
                statusOfOption1: optionID === 1 ? "wrong" : "none",
                statusOfOption2: optionID === 2 ? "wrong" : "none",
                statusOfOption3: optionID === 3 ? "wrong" : "none",
                statusOfOption4: optionID === 4 ? "wrong" : "none",
                // ----------------- //
                isCurrect: false,
            })

        }
        console.log("button id", optionID)
        console.log(`Your answer: ${userAnswer} || Correct Answer: ${correctAnswer}`)



    }
    // Handle Submit Button
    handleSubmitButton() {
        console.log("click on submit", this.state.initialStep)
        // if answer button active [selected] true then increase step
        if (this.state.initialStep === this.state.totalSteps - 1) {
            this.setState({
                isShowScoreBoard: true,
            })
        }
        else if (this.state.initialStep < this.state.totalSteps - 1) {
            this.setState({
                initialStep: this.state.initialStep + 1,
                initalGamePoint: this.state.isCurrect ? this.state.initalGamePoint + this.state.pointPerCurrectAnswer : this.state.initalGamePoint,
                statusOfOption1: "none",
                statusOfOption2: "none",
                statusOfOption3: "none",
                statusOfOption4: "none",
            })
        }
    }
    render() {
        return (
            <div className="quiz-app">
                <div className="header-section">
                    <div className="top-section">
                        <GamePoint value={this.state.initalGamePoint} />
                        <AppTitle innerText={this.state.MainAppTiitle} />
                        <CloseButton />
                    </div>
                    <div className="bottom-section">
                        <GameProgress currentStep={this.state.initialStep + 1} totalSteps={this.state.totalSteps} />
                    </div>
                </div>
                <div className="main-section">
                    {this.state.isShowScoreBoard && alert(`Score (${this.state.initalGamePoint}) -${this.state.correctAnswerCount} / ${this.state.totalSteps}`)}
                    <QuizTitle value={database[this.state.initialStep].title} />
                    <div className="asnwer-buttons">
                        <AnswerButton
                            icon={"A"}
                            value={database[this.state.initialStep].options[0]}
                            status={this.state.statusOfOption1}
                            onClick={this.handleAnswerButton.bind(this, database[this.state.initialStep].options[0], 1)}
                        />
                        <AnswerButton
                            icon={"B"}
                            value={database[this.state.initialStep].options[1]}
                            status={this.state.statusOfOption2}
                            onClick={this.handleAnswerButton.bind(this, database[this.state.initialStep].options[1], 2)}
                        />
                        <AnswerButton
                            icon={"C"}
                            value={database[this.state.initialStep].options[2]}
                            status={this.state.statusOfOption3}
                            onClick={this.handleAnswerButton.bind(this, database[this.state.initialStep].options[2], 3)}
                        />
                        <AnswerButton
                            icon={"D"}
                            value={database[this.state.initialStep].options[3]}
                            status={this.state.statusOfOption4}
                            onClick={this.handleAnswerButton.bind(this, database[this.state.initialStep].options[3], 4)}

                        />
                    </div>
                </div>
                <div className="footer-section">
                    <SubmitButton
                        value={this.state.SubmitButtonTitle}
                        className={this.state.submitButtonStatusDeactive === true ? "deactive" : ""}
                        onClick={this.handleSubmitButton.bind(this)}
                    />
                </div>
            </div>
        )
    }
}