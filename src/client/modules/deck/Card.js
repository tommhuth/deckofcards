import "./style/card.scss"

import React from "react"
import css from "classnames"
import { getMatches } from "../rules/store/actions/rules"
import Only from "../shared/Only"
import Rule from "../rules/Rule"

export default function Card({ card, isFirst, rules, isLast }) {
    let [firstMatch] = getMatches(rules, card) 

    return ( 
        <div  
            className={"card"} 
            style={{ backgroundColor: firstMatch ? card.owner.color : undefined }}> 
            <div className={css("card__inner", { "card__inner--first": isFirst, "card__inner--last": isLast, "card__inner--match": firstMatch })}> 
                <h2 className={css("card__title", { "card__title--match": firstMatch })}> 
                    <Only if={!firstMatch}>  
                        {card.rank}<br/>
                        of {card.suit}
                    </Only>
                    <Only if={firstMatch}>  
                        {card.rank} of {card.suit}
                    </Only>
                </h2>
                <Only if={firstMatch}> 
                    <p className="card__text">
                        {firstMatch && firstMatch.text}
                    </p>
                    <ul className="card__details">
                        <li className="card__details__element">{card.owner.name}</li>
                        <li className="card__details__element"><Rule rule={firstMatch} /></li>
                    </ul>
                </Only>
            </div> 
        </div>
    ) 
}
