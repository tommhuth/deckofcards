import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import reduxPromise from "redux-promise"
import rootReducer from "./reducers"

export default function () {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware, reduxPromise))
}
