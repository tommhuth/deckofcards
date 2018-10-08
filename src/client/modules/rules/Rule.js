import "./style/rule.scss"

import React from "react"
import Only from "../shared/Only"
import { capitalize } from "../../data/helpers/utils"


function renderColor({ isRed, isBlack }) {
    if (!isBlack && !isRed) {
        return null
    } 
 
    return isRed ? "red" : "black"
}

function renderRank({ rank, isFace }){
    return <span className="rule__rank">{isFace ? "Any face" : capitalize(rank) || "Any rank"}</span>
}

function renderSuit(set){
    let color = renderColor(set)
    
    return (
        <span className="rule__suit">
            <Only if={!set.suit}>
                any {color} suit
            </Only>
            <Only if={set.suit}>
                {set.suit}
            </Only>
        </span>
    )
}
  
export default function({ rule }) {
    return (
        <span className="rule">
            <span className="rule__text">
                <Only if={rule.set.rank || rule.set.suit}> 
                    {renderRank(rule.set)}
                    {" of "}
                    {renderSuit(rule.set)} 
                </Only>
                <Only if={!rule.set.rank && !rule.set.suit && !rule.set.isRed && !rule.set.isBlack}> 
                    Anything
                </Only> 
                <Only if={!rule.set.rank && !rule.set.suit && rule.set.isRed && !rule.set.isBlack}> 
                    Anything red
                </Only> 
                <Only if={!rule.set.rank && !rule.set.suit && !rule.set.isRed && rule.set.isBlack}> 
                    Anything black
                </Only>
            </span>
        </span>
    )
}
