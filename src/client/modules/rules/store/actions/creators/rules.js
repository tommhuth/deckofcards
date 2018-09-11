export const RulesAction = {
    AddRule: "rules:add-rule", 
    SetMatch: "rules:set-match", 
}

export function addRule(payload){
    return { 
        type: RulesAction.AddRule, 
        payload: payload
    }
}

export function setMatch(payload){
    return { 
        type: RulesAction.SetMatch, 
        payload: payload
    }
}
 