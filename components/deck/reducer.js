const INITIAL_STATE = {listOfDecks:[], specificDeck:{}}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SAVE_DECK':
            return{...state, 
                listOfDecks: [...state.listOfDecks, action.payload], 
                specificDeck:action.payload}
        case 'GET_ALL_DECKS':
            return{...state, listOfDecks: action.payload || [], specificDeck:{}}
        case 'GET_DECK_BY_ID':
            return{...state, specificDeck:action.payload}
        case 'SAVE_CARD_BY_DECK':
            return {specificDeck:
                {...state.specificDeck, cards:[...state.specificDeck.cards, action.payload]}, 
                listOfDecks: 
                state.listOfDecks
                .map(deck => deck.id === action.payload.id_parent 
                    ? {...deck, cards:[...deck.cards, action.payload]}: deck)}
        default:
            return state
    }
}