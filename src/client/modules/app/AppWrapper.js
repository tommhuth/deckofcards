import "./style/app.scss"

import React from "react" 
import Nav from "./Nav"
import { Link } from "react-router-dom"

export default class AppWrapper extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="app__header"> 
                    <div className="app__header-inner"> 
                        <div className="app__header__logo">
                            <Link to="/">Deck of cards</Link>
                        </div>
                        <div className="app__header__nav">
                            <Nav /> 
                        </div>
                        <hr className="app__header__ruler" />
                    </div>
                </header>
                <main className="app__main"> 
                    {this.props.children}
                </main>
            </div>
        )
    }
}
