export const PlayersAction = {
    ADD_PLAYER: "players:add-player",
    SET_ACTIVE_PLAYER: "players:set-active-player"
}

export function addPlayer(name, color, id){
    return { 
        type: PlayersAction.ADD_PLAYER, 
        payload: { name, color, id, createdAt: new Date().toISOString() }  
    }
}

export function setActivePlayer(player){
    return { 
        type: PlayersAction.SET_ACTIVE_PLAYER, 
        payload: player   
    }
}
