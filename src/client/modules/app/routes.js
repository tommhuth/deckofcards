import React from "react" 
import { Route,  BrowserRouter, Switch } from "react-router-dom"
import AppWrapper from "./AppWrapper"
import Container from "../app/Container"
import Page from "../app/Page"
import Deck from "../deck/screens/Deck"
import Home from "../deck/screens/Home"
import Players from "../players/screens/Players"
import Rules from "../rules/screens/Rules"

export default ( 
    <BrowserRouter>
        <AppWrapper>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/play" exact component={Deck} />
                <Route path="/people" exact component={Players} />
                <Route path="/rules" exact component={Rules} />
                <Route render={() => <Page><Container padded><p>No Match</p></Container></Page>} />
            </Switch>
        </AppWrapper>  
    </BrowserRouter>
)
