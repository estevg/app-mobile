import React, { Component } from 'react';
import { Image, Dimensions} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {IMAGE} from './components/constans/image'; 

import Hotel from './screens/tabs/hotel/Hotel'
import HotelDetails from './screens/tabs/hotel/HotelDetails'
import Search from './screens/tabs/search/Search'

import { SideMenu, SearchDetails, 
Profile, Login, Register
} from './routes'


const navOptionHandler = (navigation) => ({
    header: null
})

const HotelStack = createStackNavigator({
    Hotel: {
        screen: Hotel,
        navigationOptions: navOptionHandler
    },
    HotelDetails: {
        screen: HotelDetails,
        navigationOptions: navOptionHandler
    },
    Search: {
      screen: Search,
      navigationOptions: navOptionHandler
    },
    SearchDetails: {
        screen: SearchDetails,
        navigationOptions: navOptionHandler
    }
})


const MainStack = createStackNavigator({
  Home: {
    screen: HotelStack,
    navigationOptions: navOptionHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionHandler
  }
}, {initialRouteName: 'Home'})

const appDrawer = createDrawerNavigator({
  drawer: MainStack,
}, {
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width * 3/4,
  drawerType: "slide",
})


const authStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionHandler
  }
})

const app = createSwitchNavigator({
  app: appDrawer,
  auth: authStack
}, {
  initialRouteName: 'app'
})

export default class App extends Component {
  render() {
    const AppNavigator = createAppContainer(app);
    return (
        <AppNavigator/>
    )
  }
}
