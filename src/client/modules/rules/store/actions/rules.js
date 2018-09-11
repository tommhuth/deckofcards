import * as rulesActions from "./creators/rules"
import uuid from "uuid" 
import {
    isMatch
} from "underscore"

export function addRule(rule) {
    return function (dispatch) {
        dispatch(rulesActions.addRule({
            ...rule,
            id: uuid.v4()
        }))
    }
}

export function checkMatch() {
    return function (dispatch, state) {
        let rules = state().rules.active
        let card = state().deck.used[0]
        let match = getFirstMatch(rules, card)
        
        if (match) {
            dispatch(rulesActions.setMatch(match))
            console.error(match)
        } else { 
            dispatch(rulesActions.setMatch(null))
        }
    }
}

function getFirstMatch(rules, card) {
    for (let rule of rules) {
        let set = { ...rule.set }

        for (let prop in set) {
            if (set[prop] === null || set[prop] === undefined) {
                delete set[prop]
            }
        }

        if (isMatch(card, set)) {
            return rule
        }
    }
}