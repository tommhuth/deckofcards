import { PlayersAction } from "../actions/creators/players"

const init = { 
    roster: [], 
    active: null,
}

export default function (state = init, { type, payload }) {
    switch (type) { 
        case PlayersAction.AddPlayer:
            return { 
                ...state, 
                roster: [
                    ...state.roster,
                    payload
                ]
            }
        case PlayersAction.SetActivePlayer:
            return { 
                ...state, 
                active: payload
            }
        default:
            return state
    }
}
