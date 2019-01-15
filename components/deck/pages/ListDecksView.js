import React from 'react'
import {bindActionCreators} from 'redux'
import { Text, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {StyleSheet} from 'react-native'

import {showAllDecks, getDeckById} from '../actions'
import {blue} from '../../../utils/colors'

class ListDecksView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { decks: [] }
  }

  componentDidMount() {
    this.props.showAllDecksAction()
  }

  render() {
    const { decks: {listOfDecks} } = this.props
    return (
      <ScrollView>
        {listOfDecks ? listOfDecks.map((deck)=> {
          return (
            <TouchableOpacity
              onPress={() => {this.props.getDeckByIdAction(deck.id)}}
              key={deck.id}>
                <Text style={styles.deckList}>
                  {deck.title}
                </Text>
                <Text style={styles.card}>
                  {deck.cards.length} cards
                </Text>
                <Text style={styles.line}/>
            </TouchableOpacity>
          )
        }) : (
          <Text style={styles.failureMessage}>
            There are no decks. You can add your first deck on the "New Deck" button on the bottom of the screen!
          </Text>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  deckList:{
    fontSize:50,
    alignItems:'center',
    alignSelf:'center',
    marginTop:40
  },
  failureMessage:{
    fontSize:20,
    alignItems:'center',
    alignSelf:'center',
    marginTop:200,
    textAlign:'center',
  },
  card:{
    fontSize:25,
    alignItems:'center',
    alignSelf:'center'
  },
  line:{
    borderBottomWidth:1,
    borderBottomColor:blue,
    marginLeft:20,
    marginRight:20,
    marginTop:40
  }
})


function mapDispatchToProps(dispatch) {
  return bindActionCreators({showAllDecksAction: showAllDecks, getDeckByIdAction: getDeckById}, dispatch)
}

function mapStateToProps(state) {
  return {
      decks: state.deckState,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecksView)