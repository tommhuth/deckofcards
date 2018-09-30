export const PlayersAction = {
    AddPlayer: "players:add-player",
    SetActivePlayer: "players:set-active-player"
}

export function addPlayer(name, color, id){
    return { 
        type: PlayersAction.AddPlayer, 
        payload: { name, color, id }  
    }
}

export function setActivePlayer(player){
    return { 
        type: PlayersAction.SetActivePlayer, 
        payload: player   
    }
}
 