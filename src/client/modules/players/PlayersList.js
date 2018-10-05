import "./style/players-list.scss"

import React from "react"
import Container from "../app/Container"
import sortArray from "sort-array"

export default function({ players }) {
    return (
        <ul className="players-list">
            {sortArray(players, ["createdAt", "name"]).reverse().map(player => (
                <li 
                    className="players-list__element"
                    key={player.id} 
                    style={{ backgroundColor: player.color }}>
                    <Container>{player.name}</Container>
                </li>
            ))}
        </ul>
    )
}
