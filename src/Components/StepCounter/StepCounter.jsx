import React from "react";
import "./StepCounter.css"

export default class StepCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="step-counter">
                <span className="current-step">{this.props.currentStep}</span>
                <span className="divider">/</span>
                <span className="total-step">{this.props.totalSteps}</span>
            </div>
        )
    }
}