import React from "react";
import "./AppTitle.css"

export default class AppTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <h2 className="app-title">{this.props.innerText}</h2>
        )
    }
}