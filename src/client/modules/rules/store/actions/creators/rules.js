export const RulesAction = {
    ADD_RULE: "rules:add-rule", 
    SET_MATCHES: "rules:set-matches", 
}

export function addRule(payload){
    return { 
        type: RulesAction.ADD_RULE, 
        payload: payload
    }
}

export function setMatches(payload){
    return { 
        type: RulesAction.SET_MATCHES, 
        payload: payload
    }
}
 