import { RulesAction } from "../actions/creators/rules"

const init = { 
    active: [],
    archive: [],
    matches: [],
}

export default function (state = init, { type, payload }) {
    switch (type) { 
        case RulesAction.AddRule:
            return { 
                ...state, 
                active: [
                    ...state.active,
                    payload
                ]
            } 
        case RulesAction.SetMatches:
            return { 
                ...state, 
                matches: payload
            } 
        default:
            return state
    }
}
