import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import NewDeckView from './components/deck/pages/NewDeckView'
import ListDecksView from './components/deck/pages/ListDecksView'
import store from './config/store'
import NewCardQuizView from './components/card/pages/NewCardQuizView'
import CardQuizView from './components/card/pages/CardQuizView'

const TabNavigator = createBottomTabNavigator({
  decks: {
    screen: ListDecksView,
  },
  newDeck: {
    screen: NewDeckView,
  },
})

const Stack = createStackNavigator({
  home: {
    screen: TabNavigator,
  },
  addCard: {
    screen: NewCardQuizView,
  },
  startQuiz:{
    screen: CardQuizView,
  }
})

const Containers = createAppContainer(Stack);

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
