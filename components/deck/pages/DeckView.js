import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import {purple, white} from './../../../utils/colors'

class DeckView extends React.Component {
  render() {
    console.log('hello bbbbbbbbbbbbbbbbbbbb', this.props)
    const { deck: {specificDeck} } = this.props
    return (
        <View style={{flex: 1}}>
          {specificDeck.cards ? (
            <View> 
              <Text style={styles.title}>{specificDeck.title}</Text>
              <Text style={styles.cards}>{specificDeck.cards.length} cards</Text>
              <TouchableOpacity style={styles.addCardsButton} onPress={this.onSubmit}>
                <Text style={styles.addCardsButtonTxt}>
                  Add Card
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.startQuizButton} onPress={this.onSubmit}>
                <Text style={styles.startQuizButtonTxt}>
                  Start Quiz
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text>Something is wrong. How did you get here?</Text>
          )}
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:50,
    alignItems:'center',
    alignSelf:'center',
    marginTop:200
  },
  cards:{
    fontSize:50,
    alignItems:'center',
    alignSelf:'center',
    marginTop:40
  },
  addCardsButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  },
  addCardsButton:{
    marginTop:50,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:purple,
    justifyContent:'center',
  },
  startQuizButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  },
  startQuizButton:{
    marginTop:50,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:purple,
    justifyContent:'center',
  }
})

function mapStateToProps(state) {
  console.log('state no deck View AAAAAAAAAAAAAAAAAAAAAAA', state)
  return {
      deck: state.deckState,
  }
}

export default connect(mapStateToProps, null)(DeckView)