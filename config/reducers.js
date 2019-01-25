import { combineReducers } from 'redux'
import deckReducer from './../components/deck/reducer'


const reducers = combineReducers({
    deckState: deckReducer
})

export default reducers;