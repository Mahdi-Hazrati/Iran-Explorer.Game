import React from "react";
import { FiCheck } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai";
import "./AnswerButton.css"

export default class AnswerButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if (this.props.status === "currect") {
            return (
                <div className="answer-button selected" onClick={this.props.onClick}>
                    <div className="icon"><FiCheck /></div>
                    <span className="value">{this.props.value}</span>
                </div>
            )
        } 
        else if (this.props.status === "wrong") {
            return (
                <div className="answer-button wrong" onClick={this.props.onClick}>
                    <div className="icon"><AiOutlineClose /></div>
                    <span className="value">{this.props.value}</span>
                </div>
            )
        }
        else if (this.props.status === "none") {
            return (
                <div className="answer-button" onClick={this.props.onClick}>
                    <div className="icon">{this.props.icon}</div>
                    <span className="value">{this.props.value}</span>
                </div>
            )
        }
        else{
            return (
                <div className="answer-button" onClick={this.props.onClick}>
                    <div className="icon">{this.props.icon}</div>
                    <span className="value">{this.props.value}</span>
                </div>
            )
        }
    }
}