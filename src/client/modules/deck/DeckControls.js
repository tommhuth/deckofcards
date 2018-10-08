import React from "react"
import { connect } from "react-redux"
import { pullCard, resetDeck } from "./store/actions/deck" 

export function DeckControls({ players, pullCard, resetDeck }){
    return (
        <div className="toolbar">
            <div className="toolbar__inner">  
                <div className="toolbar__stuff">
                    <button type="button" onClick={pullCard} aria-controls="deck">
                        Pull card 
                    </button> 
                    <button type="button" onClick={resetDeck} aria-controls="deck">
                        Reset 
                    </button> 
                </div>
                <ul className="toolbar__people">
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
