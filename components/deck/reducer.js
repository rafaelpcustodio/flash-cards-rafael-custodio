const INITIAL_STATE = {listOfDecks:[], specificDeck:{}}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SAVE_DECK':
            return{...state, listOfDecks: [...state.listOfDecks, action.payload], specificDeck:{}}
        case 'GET_ALL_DECKS':
            return{...state, listOfDecks: action.payload || [], specificDeck:{}}
        case 'GET_DECK_BY_ID':
            return{...state, specificDeck:action.payload}
        case 'SAVE_CARD_BY_DECK':
            const passedListOfDecks = state.listOfDecks.forEach(deck => {
                if(deck.id === action.payload.id){
                    deck.cards.concat(action.payload)
                }
            })
            const passedSpecificDeck = state.specificDeck
            passedSpecificDeck.cards.concat(action.payload)
            return {listOfDecks:passedListOfDecks, specificDeck:passedSpecificDeck}
        default:
            return state
    }
}