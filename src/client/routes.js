import React from "react"
import { Route } from "react-router"
import AppWrapper from "./app/AppWrapper"
import Home from "./home/Home"

export default (
    <Route>
        <Route component={AppWrapper}>
            <Route path="/" component={Home} />
        </Route>
    </Route>
)
