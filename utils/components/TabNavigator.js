import { Text } from 'react-native'

import { TabNavigator, createBottomTabNavigator } from 'react-navigation'
import {white, pink, purple} from '../colors'
import NewDeckView from '../../components/deck/NewDeckView'


const TabNavigator = createBottomTabNavigator({
    'DECKS': ListDecksView,
    'NEW DECK': NewDeckView,
  })
  
export default createAppContainer(TabNavigator)
