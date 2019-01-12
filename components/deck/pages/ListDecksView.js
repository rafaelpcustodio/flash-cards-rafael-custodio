import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import {AsyncStorage} from 'react-native'

import {showAllDecks} from '../actions'

class ListDecksView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { decks: [] }
  }

  componentDidMount = async () => {
    let decks = await AsyncStorage.getItem("deck")
    this.props.dispatch({
      type: "GET_ALL_DECKS",
      payload: decks
    })
  }

  render() {
    const { decks: {listOfDecks} } = this.props
    console.log('decks', this.props.decks)
    console.log('listOfDecks', listOfDecks)
    return (
      <View>
        {listOfDecks ? listOfDecks.map((deck)=> {
          <View>
            <Text style={{fontSize:50}}>
              {deck.title}
            </Text>
          </View>
        }) : (
          <Text>
            Failure
          </Text>
        )}
      </View>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
      showAllDecksAction: () => dispatch(showAllDecks())
  }
}

function mapStateToProps(state) {
  return {
      decks: state.deckState,
  }
}

export default connect(mapStateToProps, null)(ListDecksView)