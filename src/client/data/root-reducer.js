import { combineReducers } from "redux"
import players from "../modules/players/store/reducers/players"
import deck from "../modules/deck/store/reducers/deck"
import rules from "../modules/rules/store/reducers/rules"

export default combineReducers({
    players,
    deck,
    rules
})
