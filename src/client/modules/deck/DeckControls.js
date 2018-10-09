import "./style/deck-controls.scss"

import React from "react"
import { connect } from "react-redux"
import { pullCard, resetDeck } from "./store/actions/deck" 

export function DeckControls({ players, pullCard, resetDeck }){
    return (
        <div className="deck-controls">
            <div className="deck-controls__inner">  
                <div className="deck-controls__stuff">
                    <button type="button" onClick={pullCard} aria-controls="deck">
                        Pull card 
                    </button> 
                    <button type="button" onClick={resetDeck} aria-controls="deck">
                        Reset 
                    </button> 
                </div>
                <ul className="deck-controls__people">
                    {
                        players.roster.map(i => {
                            let Wrapper = i.id === players.active.id ? "strong" : React.Fragment

                            return (
                                <li className={i.id === players.active.id ? "active": ""} key={i.id}>
                                    <Wrapper>{i.name}</Wrapper>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default connect(
    store => {
        return {
            deck: store.deck, 
            players: store.players
        }
    },
    dispatch => {
        return { 
            resetDeck: () => dispatch(resetDeck()),
            pullCard: () => dispatch(pullCard()),
        }
    }
)(DeckControls)
