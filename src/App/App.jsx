import React from "react"
import Game from "../Game/Game"
import "./App.css"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="app">
                <Game />
            </div>
        )
    }
}