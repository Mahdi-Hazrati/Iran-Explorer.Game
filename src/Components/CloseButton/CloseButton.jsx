import React from "react";
import {AiOutlineClose} from "react-icons/ai"
import "./CloseButton.css"

export default class CloseButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="close-button">
                <AiOutlineClose className="close-icon"  />
            </div>
        )
    }
}