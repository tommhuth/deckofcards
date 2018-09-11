import React from "react" 
import { Route,  BrowserRouter, Switch } from "react-router-dom"
import AppWrapper from "./AppWrapper"
import Deck from "../deck/screens/Deck"
import Players from "../players/screens/Players"
import Rules from "../rules/screens/Rules"

export default ( 
    <BrowserRouter>
        <AppWrapper>
            <Switch>
                <Route path="/" exact component={Deck} />
                <Route path="/players" exact component={Players} />
                <Route path="/rules" exact component={Rules} />
                <Route render={() => <p>No Match</p>} />
            </Switch>
        </AppWrapper>  
    </BrowserRouter>
)
