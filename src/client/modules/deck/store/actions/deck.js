import * as deckActions from "./creators/deck"
import { nextPlayer } from "../../../players/store/actions/players"
import { checkMatch } from "../../../rules/store/actions/rules"
   
export function pullCard() {
    return async function (dispatch, state) {
        let empty = state().deck.unused.length === 0
        
        if (!empty) { 
            dispatch(nextPlayer()) 
            dispatch(deckActions.pullCard(state().players.active))
            //dispatch(checkMatch())
        }
    }
}

export function resetDeck() {
    return async function (dispatch) {
        dispatch(deckActions.resetDeck())
    }
}
