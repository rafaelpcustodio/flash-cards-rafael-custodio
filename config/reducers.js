import { combineReducers } from 'redux'
import deckReducer from './../components/card/reducer'
import cardReducer from './../components/deck/reducer'


const reducers = combineReducers({
    decks: deckReducer,
    cards: cardReducer
})

export default reducers;