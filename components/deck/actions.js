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
     return await AsyncStorage.getItem("deck")
      .then((result) =>   {
        return dispatch({
            type: "GET_ALL_DECKS",
            payload: result
          })
      })
}
export { saveNewDeck, showAllDecks }