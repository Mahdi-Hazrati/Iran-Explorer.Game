import React from "react";
import "./SubmitButton.css"

export default class SubmitButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className={`submit-button ${this.props.className}`} onClick={this.props.onClick}>
                {this.props.value}
            </div>
        )
    }
}