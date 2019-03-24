import { PlayersAction } from "../actions/creators/players"


let start = { id: 1, name: "Fry", color: "red", createdAt: new Date() } 

const init = { 
    roster: [
        start, 
        { id: 2, name: "Leela", color: "purple", createdAt: new Date() }, 
        { id: 3, name: "Farnsworth", color: "blue", createdAt: new Date() } 
    ], 
    active: start,
}

export default function (state = init, { type, payload }) {
    switch (type) { 
        case PlayersAction.ADD_PLAYER:
            return { 
                ...state, 
                roster: [
                    ...state.roster,
                    payload
                ]
            }
        case PlayersAction.SET_ACTIVE_PLAYER:
            return { 
                ...state, 
                active: payload
            }
        default:
            return state
    }
}
