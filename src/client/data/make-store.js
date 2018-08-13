import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import reduxPromise from "redux-promise"
import { createLogger } from "redux-logger"
import rootReducer from "./root-reducer"

let logger = createLogger({ collapsed: true })

export default function () {
    return createStore(
        rootReducer, 
        applyMiddleware(thunkMiddleware, reduxPromise, logger)
    )
}
