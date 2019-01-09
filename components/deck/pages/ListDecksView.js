import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class ListDecksView extends React.Component {

  ComponentDidMount(){
    this.props.showAllDecksAction()
  }

  render() {
    const { decks } = this.props
    return (
      <View>
        <Text>Hello</Text>
        {/* {decks && decks.map((deck)=> {
          <Text>{deck.title}</Text>
        })} */}
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
      decks: state.decks,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecksView)