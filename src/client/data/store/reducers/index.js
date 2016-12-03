import { combineReducers } from "redux"
import nameRedcuer from "./name"

export default combineReducers({
    name: nameRedcuer
})
