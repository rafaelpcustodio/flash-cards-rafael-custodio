import { combineReducers } from 'redux'
import deckReducer from './../components/deck/reducer'
import cardReducer from './../components/card/reducer'


const reducers = combineReducers({
    deckState: deckReducer,
    cardState: cardReducer
})

export default reducers;