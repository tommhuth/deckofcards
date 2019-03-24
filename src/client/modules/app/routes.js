import React from "react" 
import { Route, Switch } from "react-router-dom" 
import Deck from "../deck/screens/Deck"
import NotFound from "./screens/NotFound"
import Home from "./screens/Home"
import Players from "../players/screens/Players"
import Rules from "../rules/screens/Rules"

export default ( 
    <React.Fragment>
        <Switch> 
            <Route path="/" exact component={Home} />
            <Route path="/play" exact component={Deck} />
            <Route path="/people" exact component={Players} />
            <Route path="/rules" exact component={Rules} />
            <Route component={NotFound} />
        </Switch> 
    </React.Fragment>
)
