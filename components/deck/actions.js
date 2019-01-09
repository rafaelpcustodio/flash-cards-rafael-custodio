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

const showAllDecks = async () => {
    decks = await AsyncStorage.getItem('deck')
    return (dispatch) => {
        dispatch({
            type: 'SHOW_ALL_DECKS',
            payload: decks
        })
    }
}
export { saveNewDeck, showAllDecks }