import React from "react";
import {AiFillStar} from "react-icons/ai"
import "./GamePoint.css"

export default class GamePoint extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="game-point">
                <AiFillStar className="point"  />
                <span className="value">{this.props.value}</span>
            </div>
        )
    }
}