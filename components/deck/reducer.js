const INITIAL_STATE = {listOfDecks:[]}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SAVE_DECK':
            console.log('action save deck - state', state)
            console.log('action save deck - payload', action.payload)
            return{...state, listOfDecks: state.listOfDecks.concat(action.payload)}
        case 'GET_ALL_DECKS':
            console.log('action save deck - state', state)
            console.log('action save deck - payload', action.payload)
            return{...state, listOfDecks: action.payload}
        case 'GET_DECK_BY_ID':
            console.log('dentro do reducer', action.payload)
            return{...state, listOfDecks: action.payload}
        default:
            return state
    }
}