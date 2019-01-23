import React from 'react'
import { StyleSheet, Text, AsyncStorage, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

import {purple, white} from './../../../utils/colors'

class NewCardQuizView extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      questionText: "",
      answerText: ""
   }
  }

  handleInputCardQuestionChanges(event) {
    this.setState({ questionText: event })
  }

  handleInputCardAnswerChanges(event) {
    this.setState({ answerText: event })
  }

  onSubmit = async () => {
    
    const payload = {
      id_parent:this.props.decks.specificDeck.id,
      question:this.state.questionText, 
      answer:this.state.answerText
    }
    this.props.dispatch({
      type: "SAVE_CARD_BY_DECK",
      payload: payload
    })
    const deckToBeMerged = {
      ...this.props.decks.specificDeck, 
      cards:[...this.props.decks.specificDeck.cards, payload]
    }
    await AsyncStorage
    .mergeItem("deck".concat(this.props.decks.specificDeck.id), 
    JSON.stringify(deckToBeMerged))
    this.props.navigation.navigate('deckView')
  }

  render() {
    return (
        <View style={styles.rows}>
            <TextInput
              style={styles.questionText}
              placeholder="Card Question"
              onChangeText={questionText => this.handleInputCardQuestionChanges(questionText)}
            />
            <TextInput
              style={styles.answerText}
              placeholder="Card Answer"
              onChangeText={answerText => this.handleInputCardAnswerChanges(answerText)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit}>
              <Text style={styles.submitButtonTxt}>
                Submit
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
  questionText:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:50,
    borderRadius:10,
    borderWidth:1,
    height:30,
    width:300,
  },
  answerText:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:50,
    borderRadius:10,
    borderWidth:1,
    height:30,
    width:300,
  },
  submitButton:{
    marginTop:55,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:purple,
    justifyContent:'center',
  },
  submitButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  }
})

function mapStateToProps(state) {
  return {
    decks: state.deckState
  };
}

export default connect(
  mapStateToProps,
  null
)(NewCardQuizView);