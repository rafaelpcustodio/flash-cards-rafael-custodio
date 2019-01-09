import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import {purple, gray, white} from './../../../utils/colors'
import {saveNewDeck} from '../actions'

class NewDeckView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleInputDeckNameChanges(event) {
    this.setState({ text: event })
  }

  onSubmit(){
    this.props.saveNewDeckAction(this.state.text)
  }

  render() {
    return (
        <View style={styles.rows}>
            <Text style={styles.questionText}>
              What is the title of your new deck?
            </Text>
            <TextInput
              style={styles.typeTxt}
              placeholder='Deck Title'
              onChangeText={(text) => this.handleInputDeckNameChanges(text)}
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
    typeTxt:{
      paddingLeft:20,
      paddingRight:20,
      marginTop:100,
      borderRadius:10,
      borderWidth:1,
      height:30,
      width:300,
    },
    questionText:{
      marginTop:200,
      fontSize:50,
      marginTop:100,
      color:gray,
      textAlign:'center',
    },
    submitButton:{
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
    submitButtonTxt:{
      color:white,
      fontSize:22,
      textAlign:'center'
    }
})

function mapDispatchToProps(dispatch) {
  return {
      saveNewDeckAction: (text) => dispatch(saveNewDeck(text))
  }
}

function mapStateToProps(state) {
  return {
      decks: state.decks,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView)