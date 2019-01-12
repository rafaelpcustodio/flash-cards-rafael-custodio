const INITIAL_STATE = {listOfDecks:[]}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SAVE_DECK':
            return{...state, listOfDecks: state.listOfDecks.concat(action.payload)}
        case 'SHOW_ALL_DECKS':
            return{...state, listOfDecks: action.payload}
        default:
            return state
    }
}