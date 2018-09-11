export const DeckAction = { 
    ResetDeck: "deck:reset-deck",
    PullCard: "deck:pull-card",
}

export function pullCard(owner) {
    return {
        type: DeckAction.PullCard,
        payload: owner
    }
}

export function resetDeck() {
    return {
        type: DeckAction.ResetDeck
    }
}
 