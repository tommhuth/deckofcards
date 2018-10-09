import "./style/nav.scss"

import React from "react" 
import { NavLink } from "react-router-dom"

export default function Nav() {
    return ( 
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
    )
}
