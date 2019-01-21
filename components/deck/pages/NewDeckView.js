import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import {purple, gray, white} from './../../../utils/colors'

class NewDeckView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  handleInputDeckNameChanges(event) {
    this.setState({ text: event })
  }

  onSubmit = async () => {
    let newDeck = {
      id:Math.random().toString(36).substr(-8),
      title: this.state.text,
      cards: []
    }
    await AsyncStorage.mergeItem("deck".concat(newDeck.id), JSON.stringify(newDeck))
    this.props.dispatch({
      type: "SAVE_DECK",
      payload: newDeck
    })
  }

  render() {
    return (
        <View style={styles.rows}>
            <Text style={styles.questionText}>
              What is the title of your new deck?
            </Text>
            <TextInput
              style={styles.typeTxt}
              placeholder="Deck Title"
              onChangeText={text => this.handleInputDeckNameChanges(text)}
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
      marginTop:50,
      borderRadius:10,
      borderWidth:1,
      height:30,
      width:300,
    },
    questionText:{
      marginTop:20,
      fontSize:50,
      color:gray,
      textAlign:'center',
    },
    submitButton:{
      marginTop:35,
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
    decks: state.decks
  };
}

export default connect(
  mapStateToProps,
  null
)(NewDeckView);