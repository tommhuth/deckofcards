import * as rulesActions from "./creators/rules"
import uuid from "uuid" 
import { isMatch } from "underscore"
import { makeDeck } from "../../../deck/utils/deck-maker"

export function addRule(rule) {
    return function (dispatch) {
        dispatch(rulesActions.addRule({
            ...rule,
            id: uuid.v4()
        }))
    }
}

export function checkMatch(rules, card) {
    return function (dispatch, state) { 
        let matches = getMatches(rules, card)
        
        if (matches.length) { 
            console.info(matches)
        }  
            
        dispatch(rulesActions.setMatches(matches))
    }
}
export function getMatches(rules = [], card) {
    let result = []
    
    for (let rule of rules) {
        let set = { ...rule.set }

        for (let prop in set) {
            if (set[prop] === null || set[prop] === undefined) {
                delete set[prop]
            }
        }

        if (isMatch(card, set)) {
            result.push(rule)
        }
    }

    return result
}

export function getMatchGrade(rule){
    let deck = makeDeck()
    let hits = 0

    for(let card of deck) {
        if (getMatches([rule], card).length) {
            hits++
        }
    } 

    return hits / deck.length
}
