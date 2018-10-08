import * as deckActions from "./creators/deck"
import { nextPlayer } from "../../../players/store/actions/players"
   
export function pullCard() {
    return async function (dispatch, state) {
        let empty = state().deck.unused.length === 0
        let first = state().deck.used.length === 0
        
        if (!empty) { 
            if (!first) { 
                dispatch(nextPlayer())
            } 
            dispatch(deckActions.pullCard(state().players.active)) 
        }
    }
}

export function resetDeck() {
    return async function (dispatch) {
        dispatch(deckActions.resetDeck())
    }
}
