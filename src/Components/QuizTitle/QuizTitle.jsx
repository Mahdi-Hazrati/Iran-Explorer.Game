import React from "react";
import "./QuizTitle.css"

export default class QuizTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <h3 className="quiz-title">
                {this.props.value}
            </h3>
        )
    }
}