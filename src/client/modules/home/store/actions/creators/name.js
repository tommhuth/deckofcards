export const NameAction = {
    Set: "name:set",
    Loading: "name:loading",
    Loaded: "name:loaded",
    Error: "name:error"
}

export function set(data){
    return { 
        type: NameAction.Set, 
        payload: data  
    }
}

export function error(error){
    return { 
        type: NameAction.Error, 
        payload: error
    }
}

export function loaded(){
    return { 
        type: NameAction.Loaded
    }
}

export function loading(){
    return { 
        type: NameAction.Loading
    }
}
