const INITIAL_STATE = {listOfDecks:[], specificDeck:{}}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SAVE_DECK':
            console.log('-----------------------------')
            console.log('dentro do reducer state - SAVE_DECK', state)
            console.log('-----------------------------')
            console.log('dentro do reducer payload - SAVE_DECK', action.payload)
            console.log('-----------------------------')
            return{...state, listOfDecks: [...state.listOfDecks, action.payload], specificDeck:{}}
        case 'GET_ALL_DECKS':
            console.log('-----------------------------')
            console.log('dentro do reducer state - GET_ALL_DECKS', state)
            console.log('-----------------------------')
            console.log('dentro do reducer payload - GET_ALL_DECKS', action.payload)
            console.log('-----------------------------')
            return{...state, listOfDecks: action.payload || [], specificDeck:{}}
        case 'GET_DECK_BY_ID':
            console.log('-----------------------------')
            console.log('dentro do reducer state - GET_DECK_BY_ID', state)
            console.log('-----------------------------')
            console.log('dentro do reducer payload - GET_DECK_BY_ID', action.payload)
            console.log('-----------------------------')
            return{specificDeck:action.payload}
        default:
            return state
    }
}