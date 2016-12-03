import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { Router, browserHistory } from "react-router"
import { Provider } from "react-redux"
import routes from "./routes"
import makeStore from "./data/store/make-store"

const store = makeStore()

class Client extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <Router history={browserHistory} routes={routes} />
            </Provider>
        )
    }
}

ReactDOM.render(<Client />, document.getElementById("app"))
