import React from "react"
import { connect } from "react-redux" 
import Page from "../../app/Page"
import Container from "../../app/Container"
import { addPlayer } from "../store/actions/players"

export class Players extends React.Component { 
    state = {
        name: ""
    }
    render() { 
        const { players, addPlayer } = this.props 

        return (
            <Page>
                <Container padded>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        addPlayer(this.state.name, "red")}
                    }>
                        <fieldset>
                            <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            <button>Add</button>
                        </fieldset>
                    </form>
                    <ul>
                        {players.roster.map(player => <li key={player.id}><strong>{player.name}</strong> {player.color}</li>)}
                    </ul>
                </Container>
            </Page>
        )
    }
}

export default connect(
    store => {
        return {
            players: store.players
        }
    },
    dispatch => {
        return { 
            addPlayer: (name, color) => dispatch(addPlayer(name, color))
        }
    }
)(Players)
