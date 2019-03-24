export const DeckAction = { 
    RESET_DECK: "deck:reset-deck",
    PULL_CARD: "deck:pull-card",
}

export function pullCard(owner) {
    return {
        type: DeckAction.PULL_CARD,
        payload: owner
    }
}

export function resetDeck() {
    return {
        type: DeckAction.RESET_DECK
    }
}
 