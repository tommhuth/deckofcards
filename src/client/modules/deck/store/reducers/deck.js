import { DeckAction } from "../actions/creators/deck"
import { makeDeck } from "../../utils/deck-maker"

const init = { 
    used: [], 
    unused: makeDeck()
}

export default function (state = init, { type, payload }) {
    switch (type) {  
        case DeckAction.RESET_DECK:
            return {
                used: [],
                unused: makeDeck()
            }
        case DeckAction.PULL_CARD:
            return {
                ...state,
                used: [
                    {
                        ...state.unused[0],
                        owner: {
                            ...payload
                        }
                    },
                    ...state.used
                ],
                unused: [ 
                    ...state.unused.slice(1)
                ]
            }
        default:
            return state
    }
}
