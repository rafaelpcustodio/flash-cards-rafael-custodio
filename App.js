import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import NewDeckView from './components/deck/pages/NewDeckView'
import ListDecksView from './components/deck/pages/ListDecksView'
import store from './config/store'
import NewCardQuizView from './components/card/pages/NewCardQuizView'
import CardQuizView from './components/card/pages/CardQuizView'
import DeckView from './components/deck/pages/DeckView'

const TabNavigator = createBottomTabNavigator({
  "DECK LIST": {
    screen: ListDecksView,
  },
  "NEW DECK": {
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
  },
  deckView:{
    screen: DeckView,
  }
})

const Containers = createAppContainer(Stack);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Containers navigation={this.props.navigation}/>
      </Provider>
    )
  }
}

export default App
