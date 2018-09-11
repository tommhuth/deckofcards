import { knuthShuffle as shuffle } from "knuth-shuffle"
import Rank from "../const/Rank"
import Suit from "../const/Suit"
 
export function makeDeck(){
    let deck = []
    let counter = 0

    for (let suit in Suit) { 
        for (let rank in Rank) {
            deck.push({
                rank: Rank[rank],
                suit: Suit[suit],
                isFace: [Rank.Jack, Rank.Queen, Rank.King].includes(Rank[rank]),
                isBlack: [Suit.Clubs, Suit.Spades].includes(Suit[suit]),
                isRed: [Suit.Diamonds, Suit.Hearts].includes(Suit[suit]),
                id: counter++
            })
        }
    }

    return shuffle(deck)
} 