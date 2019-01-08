import {AsyncStorage} from 'react-native'

const saveNewDeck = async newDeck => {
    await AsyncStorage.setItem('newDeck', newDeck)
    return (dispatch) => {
        dispatch({
            type: 'SAVE_DECK',
            payload: newDeck
        })
    }
}
export { saveNewDeck }