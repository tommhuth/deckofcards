export const RulesAction = {
    AddRule: "rules:add-rule", 
    SetMatches: "rules:set-matches", 
}

export function addRule(payload){
    return { 
        type: RulesAction.AddRule, 
        payload: payload
    }
}

export function setMatches(payload){
    return { 
        type: RulesAction.SetMatches, 
        payload: payload
    }
}
 