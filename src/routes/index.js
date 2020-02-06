import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  LOADING_PAGE,
  LOGIN,
  REGISTER,
  HOME,
  RESULTS,
  PROFILE,
  GROUPS,
  CREATE_GROUP,
  SEARCH_GROUP,
  EVENT,
  CREATE_EVENT,
  MAPS,
  PRIMARY
} from '../consts'

import Login from '../views/Login'
import Home from '../views/Home'
import LoadingPage from '../views/LoadingPage'
import Results from '../views/Results'
import Profile from '../views/Profile'
import Groups from '../views/Groups'
import CreateGroup from '../views/Groups/CreateGroup'
import SearchGroup from '../views/Groups/SearchGroup'
import Register from '../views/Register'
import Event from '../views/Events'
import CreateEvent from '../views/Events/CreateEvent'
import Maps from '../views/Maps'

const AppLoading = createStackNavigator({
  [LOADING_PAGE]: LoadingPage
}, {
  headerMode: 'none'
})
const AuthStack = createStackNavigator({
  [LOGIN]: Login,
  [REGISTER]: Register
}, {
  headerMode: 'none'
})
const AppNavigator = createStackNavigator({
  [HOME]: Home,
  [RESULTS]: Results,
  [PROFILE]: Profile,
  [GROUPS]: Groups,
  [CREATE_GROUP]: CreateGroup,
  [SEARCH_GROUP]: SearchGroup,
  [EVENT]: Event,
  [CREATE_EVENT]: CreateEvent,
  [MAPS]: Maps
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: PRIMARY
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AppLoading,
      Auth: AuthStack,
      App: AppNavigator
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)
