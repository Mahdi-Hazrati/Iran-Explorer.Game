import React from "react";
import StepCounter from "../StepCounter/StepCounter"
import ProgressBar from "../ProgressBar/ProgressBar"
import "./GameProgress.css"

export default class GameProgress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="game-progress">
                <ProgressBar currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} />
                <StepCounter currentStep={this.props.currentStep} totalSteps={this.props.totalSteps} />
            </div>
        )
    }
}