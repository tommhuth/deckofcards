import "babel-polyfill"
import "../resources/resources"

import { BrowserRouter } from "react-router-dom"
import AppWrapper from "./modules/app/AppWrapper"
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
                <BrowserRouter>
                    <AppWrapper>
                        {routes} 
                    </AppWrapper>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<Client />, document.getElementById("app"))
