import React from "react";
import "./ProgressBar.css"

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    calculateWidthOfBar() {
        let current = this.props.currentStep
        let total = this.props.totalSteps
        // if current is 1 and total is 5 perecentage of this is 20% -> 1 / 5 * 100 = 20 -> 20 + '%' = 20%
        return (current / total * 100) + "%"
    }
    render() {
        return (
            <div className="progress-bar-container">
                <div className="progress">
                    <div className="bar" style={{ width: this.calculateWidthOfBar() }}></div>
                </div>
            </div>
        )
    }
}