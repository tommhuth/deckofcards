import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import reduxPromise from "redux-promise"
import { createLogger } from "redux-logger"
import rootReducer from "./root-reducer" 

let logger = createLogger({ collapsed: true })

export default function () {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        rootReducer, 
        {}, 
        composeEnhancers(applyMiddleware(thunkMiddleware, reduxPromise, logger))
    )
}
