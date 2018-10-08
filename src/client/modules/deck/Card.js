import "./style/card.scss"

import React from "react"
import css from "classnames"
import { getMatches } from "../rules/store/actions/rules"
import Only from "../shared/Only"
import Rule from "../rules/Rule"
import { capitalize } from "../../data/helpers/utils"

export default function Card({ card, isFirst, rules, isLast }) {
    let [firstMatch] = getMatches(rules, card) 

    return ( 
        <div  
            className={"card"} 
            aria-live={isFirst ? "polite" : "off"}
            style={{ backgroundColor: firstMatch ? card.owner.color : undefined }}> 
            <div className={css("card__inner", { "card__inner--first": isFirst, "card__inner--last": isLast, "card__inner--match": firstMatch })}> 
                <h2 className={css("card__title", { "card__title--match": firstMatch })}> 
                    <Only if={!firstMatch}>  
                        <span className="card__title__rank">{capitalize(card.rank)}</span>
                        {" of "} 
                        {card.suit}
                    </Only>
                    <Only if={firstMatch}>  
                        {capitalize(card.rank)} of {card.suit}
                    </Only>
                </h2>
                <Only if={firstMatch}> 
                    <p className="card__text">
                        {firstMatch && firstMatch.text}
                    </p>
                    <ul className="card__details">
                        <li className="card__details__element">
                            <strong className="visually-hidden">Owner:</strong> {card.owner.name}
                        </li>
                        <li className="card__details__element">
                            <strong className="visually-hidden">Rule:</strong> <Rule rule={firstMatch} />
                        </li>
                    </ul>
                </Only>
            </div> 
        </div>
    ) 
}
