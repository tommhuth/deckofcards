import { RulesAction } from "../actions/creators/rules"

const init = { 
    active: [ { set: { isRed: true }, text: "Lorem ipsum dolor sitamet blah Fututrama lols" }],
    archive: [],
    matches: [],
}

export default function (state = init, { type, payload }) {
    switch (type) { 
        case RulesAction.ADD_RULE:
            return { 
                ...state, 
                active: [
                    ...state.active,
                    payload
                ]
            } 
        case RulesAction.SET_MATCHES:
            return { 
                ...state, 
                matches: payload
            } 
        default:
            return state
    }
}
