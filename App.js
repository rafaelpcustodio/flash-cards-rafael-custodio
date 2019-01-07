import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import reducer from './config/reducers'
import NewDeckView from './components/deck/NewDeckView'
import ListDecksView from './components/deck/ListDecksView'
import {white, pink, purple} from './utils/colors'


class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  'DECKS': ListDecksView,
  'NEW DECK': NewDeckView,
})

export default createAppContainer(TabNavigator)
