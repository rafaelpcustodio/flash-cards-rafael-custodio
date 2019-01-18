import {AsyncStorage} from 'react-native'

const saveNewDeck = async newDeck => {
    await AsyncStorage.setItem('deck', newDeck)
    return (dispatch) => {
        dispatch({
            type: 'SAVE_DECK',
            payload: newDeck
        })
    }
}

const showAllDecks = () => dispatch => AsyncStorage.getItem("deck")
.then(result => dispatch({
    type: "GET_ALL_DECKS",
    payload: JSON.parse(result)
}))

const getDeckById = (id) => dispatch => AsyncStorage.getItem("deck".concat(id))
.then(result => {
    dispatch({
    type: "GET_DECK_BY_ID",
    payload: JSON.parse(result)
})})

export {  showAllDecks, getDeckById, saveNewDeck }