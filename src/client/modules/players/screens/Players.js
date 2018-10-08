import "../style/add-player.scss"

import React from "react"
import { connect } from "react-redux" 
import Page from "../../app/Page"
import Container from "../../app/Container"
import { addPlayer } from "../store/actions/players"
import PlayersList from "../PlayersList"

export class Players extends React.Component { 
    state = {
        name: ""
    }
    render() { 
        const { players, addPlayer } = this.props 

        return (
            <Page>
                <Container padded>
                    <h1 className="visually-hidden">People</h1> 
                    <form
                        noValidate
                        onSubmit={(e) => {
                            e.preventDefault()
                            addPlayer(this.state.name, "red")}
                        }
                    >
                        <fieldset>
                            <legend className="visually-hidden">Add player</legend>
                            <div className="add-player">
                                <div className="add-player__input-wrapper"> 
                                    <input 
                                        className="add-player__input"
                                        type="text"
                                        required
                                        value={this.state.name} 
                                        onChange={e => this.setState({ name: e.target.value })} />
                                </div>
                                <div className="add-player__submit-wrapper">  
                                    <button className="add-player__submit">Add</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </Container>
 
                <PlayersList players={players.roster} />
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
