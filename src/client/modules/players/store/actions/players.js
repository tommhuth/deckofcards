import * as playersActions from "./creators/players" 
import uuid from "uuid"
 
export function addPlayer(name, color) {
    return async function (dispatch, state) {
        let rosterSize = state().players.roster.length

        dispatch(playersActions.addPlayer(name, color, uuid.v4()))

        if (!rosterSize) { 
            dispatch(playersActions.setActivePlayer(state().players.roster[0]))
        }
    }
}

export function nextPlayer() {
    return async function (dispatch, state) {
        let { active, roster } = state().players 
        let currentIndex = roster.findIndex(i => i.id === active.id)
        let nextPlayer = roster[currentIndex + 1 < roster.length ? currentIndex + 1 : 0]

        dispatch(playersActions.setActivePlayer(nextPlayer))
    }
}