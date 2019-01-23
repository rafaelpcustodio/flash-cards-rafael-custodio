import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import {red, white, green, gray} from './../../../utils/colors'

class CardQuizView extends React.Component {
  render() {
    console.log('PROPS CARD QUIZ VIEW', this.props)
    return (
        <View style={styles.rows}>
            <Text style={styles.question}>
              QUESTION
            </Text>
            <Text style={styles.question}>
              ANSWER
            </Text>
            <TouchableOpacity style={styles.correctButton} onPress={this.onSubmit}>
              <Text style={styles.correctButtonTxt}>
                Correct
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incorrectButton} onPress={this.onSubmit}>
              <Text style={styles.incorrectButtonTxt}>
                Incorrect
              </Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  rows:{
    alignItems:'center',
    flex:1,
  },
  question:{
    marginTop:20,
    fontSize:50,
    color:gray,
    textAlign:'center',
  },
  correctButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  },
  correctButton:{
    marginTop:35,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    width:200,
    backgroundColor:green,
    justifyContent:'center',
  },
  incorrectButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  },
  incorrectButton:{
    marginTop:35,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    width:200,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:red,
    justifyContent:'center',
  },
})

function mapStateToProps(state) {
  return {
    decks: state.deckState
  };
}

export default connect(
  mapStateToProps,
  null
)(CardQuizView);