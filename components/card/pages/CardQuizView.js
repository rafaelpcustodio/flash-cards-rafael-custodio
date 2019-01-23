import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import {red, white, green, gray, purple} from './../../../utils/colors'
import Question from '../components/Question'
import Answer from '../components/Answer'
import AnswerText from '../components/AnswerText'

class CardQuizView extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        showAnswer:false,
        index:0,
        correctAnswers:0,
        scoreViewShow:false
    }
  }

  setTrueAnswer = () => {
    this.setState({showAnswer:true})
  }

  onSubmitCorrect = () =>{
    if(this.state.index < this.props.decks.specificDeck.cards.length - 1){
      this.setState({index:this.state.index + 1})
    }else if(this.state.index === this.props.decks.specificDeck.cards.length - 1){
      this.setState({correctAnswers: this.state.correctAnswers + 1})
      this.setState({scoreViewShow:true})
    }
    this.setState({showAnswer:false})
    this.setState({correctAnswers: this.state.correctAnswers + 1})
  }

  onSubmitIncorrect = () =>{
    if(this.state.index < this.props.decks.specificDeck.cards.length - 1){
      this.setState({index:this.state.index + 1})
    }else if(this.state.index === this.props.decks.specificDeck.cards.length - 1){
      this.setState({scoreViewShow:true})
    }
    this.setState({showAnswer:false})
  }

  onFinishQuiz = () => {
    this.props.navigation.navigate('deckView')
  }

  onRestartQuiz = () => {
    this.setState({scoreViewShow:false})
    this.setState({index:0})
    this.setState({correctAnswers:0})
  }

  render() {
    const { decks: {specificDeck} } = this.props
    const {index, scoreViewShow} = this.state
    return (
        <View style={styles.rows}>
          { scoreViewShow ? (
          <View>
            <Text style={styles.scoreTxt}>Your final score is {this.state.correctAnswers}/{this.props.decks.specificDeck.cards.length}</Text>
            <TouchableOpacity style={styles.restartQuizButton} onPress={this.onRestartQuiz}>
              <Text style={styles.restartQuizButtonTxt}>
                Restart quiz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.finishButton} onPress={this.onFinishQuiz}>
              <Text style={styles.finishButtonTxt}>
                Finish
              </Text>
            </TouchableOpacity>
          </View>):(
          specificDeck.cards[index] ? (
            <View>
              <Text style={styles.score}>cards: {this.state.index + 1}/{specificDeck.cards.length}</Text>
              <View>
                  <Question specificCard={specificDeck.cards[index]}/>
                  <TouchableOpacity onPress={this.setTrueAnswer}>
                    <AnswerText showAnswer={!this.state.showAnswer}/>
                    <Answer showAnswer={this.state.showAnswer} specificCard={specificDeck.cards[index]}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.correctButton} onPress={this.onSubmitCorrect}>
                    <Text style={styles.correctButtonTxt}>
                      Correct
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.incorrectButton} onPress={this.onSubmitIncorrect}>
                    <Text style={styles.incorrectButtonTxt}>
                      Incorrect
                    </Text>
                  </TouchableOpacity>
              </View>
          </View>)
           :(<View><Text>
            There are no cards in this deck. You can add one on the previous screen.
          </Text></View>))}
        </View>)
  }
}

const styles = StyleSheet.create({
  rows:{
    flex:1,
  },
  scoreTxt:{
    marginTop:20,
    fontSize:50,
    color:gray,
    textAlign:'center',
  },
  score:{
    marginTop:20,
    marginLeft:10,
    fontSize:20,
    textAlign:'left'
  },
  answerTxt:{
    marginTop:20,
    fontSize:25,
    color:gray,
    textAlign:'center',
  },
  finishButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  },
  finishButton:{
    marginTop:35,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    width:200,
    backgroundColor:purple,
    justifyContent:'center',
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
  restartQuizButtonTxt:{
    color:white,
    fontSize:22,
    textAlign:'center'
  },
  restartQuizButton:{
    marginTop:35,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    height:45,
    alignSelf:'center',
    borderRadius:10,
    width:200,
    backgroundColor:purple,
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