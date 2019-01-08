import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'

import NewDeckView from './components/deck/NewDeckView'
import ListDecksView from './components/deck/ListDecksView'
import store from './config/store'

const TabNavigator = createBottomTabNavigator({
  'DECKS': ListDecksView,
  'NEW DECK': NewDeckView,
})

const Containers = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Containers />
      </Provider>
    )
  }
}

export default App
