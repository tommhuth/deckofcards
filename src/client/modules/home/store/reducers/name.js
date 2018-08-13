import { NameAction } from "../actions/creators/name"

const init = {
    loading: false,
    data: null,
    error: null
}

export default function (state = init, action) {
    switch (action.type) {
        case NameAction.Set:
            return { ...state, data: action.payload }
        case NameAction.Loading:
            return { ...state, loading: true }
        case NameAction.Loaded:
            return { ...state, loading: false }
        case NameAction.Error:
            return { ...state, error: action.payload }
        default:
            return state
    }
}
