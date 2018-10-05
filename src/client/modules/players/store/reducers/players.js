import { PlayersAction } from "../actions/creators/players"


let start = { id: 1, name: "Fry", color: "red", createdAt: new Date().toISOString() } 

const init = { 
    roster: [
        start, 
        { id: 2, name: "Leela", color: "purple", createdAt: new Date().toISOString() }, 
        { id: 3, name: "Farnsworth", color: "blue", createdAt: new Date().toISOString() } 
    ], 
    active: start,
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
