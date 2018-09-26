import "./style/card.scss"

import React from "react" 

export default function Card({ suit, rank, onSuitClick = () => {}, onRankClick = () => {} }) {
    return ( 
        <div  className="card">
            <div className="card__suit card__suit--bottom" onClick={onSuitClick}>{suit}</div>
            <div className="card__suit card__suit--top" onClick={onSuitClick}>{suit}</div>
            <div className="card__rank" onClick={onRankClick}>{rank}</div>
        </div>
    )
}