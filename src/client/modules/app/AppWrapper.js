import "./style/app.scss"

import React from "react"
import { Icon, IconType } from "../shared/Icon"
import { NavLink, Link } from "react-router-dom"

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
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <NavLink to="/play">Play</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/people">People</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/rules">Rules</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/share">Share</NavLink>
                                    </li>
                                </ul>
                            </nav> 
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
