const INITIAL_STATE = {decks:[]}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SAVE_DECK':
            console.log('state reducer deck',state)
            return{decks: state.decks.concat(action.payload)}
        case 'SHOW_ALL_DECKS':
            return{...state, decks: action.payloadd}
        default:
            return state
    }
}