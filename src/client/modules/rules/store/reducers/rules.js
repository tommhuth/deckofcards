import { RulesAction } from "../actions/creators/rules"

const init = { 
    active: [],
    archive: [],
    match: null,
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
        case RulesAction.SetMatch:
            return { 
                ...state, 
                match: { ...payload }
            } 
        default:
            return state
    }
}
