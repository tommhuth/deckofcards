import React from "react" 
import Page from "../../app/Page"
import { connect } from "react-redux"
import { pullCard, resetDeck } from "../store/actions/deck" 
import Rule from "../../rules/Rule"

export class Deck extends React.Component { 
    pullCard(){
        let { pullCard } = this.props 

        pullCard() 
    }
    render() { 
        const { reset, deck, rules } = this.props
        const { used } = deck 

        return (
            <Page>
                <button onClick={() => this.pullCard()}>Pull card</button>
                <button onClick={reset}>reset</button>

                <hr />
                
                <div style={{ padding: 16, border: "1px solid #DDD"}}> 
                    <ul>
                        {rules.matches.map(i => <li key={i.id}><Rule rule={i} /></li>)}
                    </ul>
                </div>  

                <div style={{ padding: 16, border: "1px solid #DDD"}}> 
                    <ul>
                        {used.map(i => <li key={i.id}>{i.rank} of {i.suit}</li>)}
                    </ul>
                </div> 
            </Page>
        )
    }
} 

export default connect(
    store => {
        return {
            deck: store.deck,
            rules: store.rules
        }
    },
    dispatch => {
        return { 
            resetDeck: () => dispatch(resetDeck()),
            pullCard: () => dispatch(pullCard()),
        }
    }
)(Deck)
