import "./style/app.scss"

import React from "react"
import { Icon, IconType } from "../shared/Icon"
import { Link} from "react-router-dom"

export default class AppWrapper extends React.Component {
    render() {
        return (
            <div className="app"> 
                <div className="app__logo">
                    Deck <span>of</span> cards
                </div>
                <div className="app__nav">
                    <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rules">Rules</Link>
                        </li>
                        <li>
                            <Link to="/players">Players</Link>
                        </li>
                        <li>
                            <Link to="/share">Share</Link>
                        </li>
                    </ul>
                </nav> 
                </div>
                <main className="app__main"> 
                    {this.props.children}
                </main>
            </div>
        )
    }
}
