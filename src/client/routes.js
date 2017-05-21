import React from "react" 
import { Route,  BrowserRouter, Switch } from "react-router-dom"
import AppWrapper from "./app/AppWrapper"
import Home from "./home/Home"

export default ( 
    <BrowserRouter>
        <AppWrapper>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route render={() => <p>No Match</p>} />
            </Switch>
        </AppWrapper>  
    </BrowserRouter>
)
