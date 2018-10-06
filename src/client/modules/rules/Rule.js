import "./style/rule.scss"

import React from "react"

function renderColor({ isRed, isBlack }) {
    let res = "" 

    if (!isBlack && !isRed) {
        return null
    }

    if (isBlack) {
        res = "rule__color--black"
    }

    if (isRed) {
        res = "rule__color--red"
    }

    return (
        <div className={"rule__color " + res } />
    )
}

function renderRank({ rank, isFace }){
    return <span className="rule__rank">{isFace ? "Any face" : rank || "Any rank"}</span>
}

function renderSuit({ suit }){
    return <span className="rule__suit">{suit || "any suit"}</span>
}

export default function({ rule }) {
    return (
        <div className="rule">
            <span className="rule__text">
                {renderRank(rule.set)}
                {" of "}
                {renderSuit(rule.set)}
            </span>
            {renderColor(rule.set)}
        </div>
    )
}