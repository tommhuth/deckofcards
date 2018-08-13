import "babel-polyfill"
import "../resources/resources"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import routes from "./modules/app/routes"
import makeStore from "./data/make-store"

const store = makeStore()

class Client extends React.Component {
    render() {
        return (
            <Provider store={store} >
                {routes}
            </Provider>
        )
    }
}

ReactDOM.render(<Client />, document.getElementById("app"))
