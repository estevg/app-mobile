import React, { Component } from 'react';
import { Image, Dimensions} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {IMAGE} from './components/constans/image'; 

import Feed from './screens/tabs/feed/Feed'
import FeedDetails from './screens/tabs/feed/FeedDetails'
import { SideMenu, Search, SearchDetails, 
Profile, Setting, Login, Register
} from './routes'


const navOptionHandler = (navigation) => ({
    header: null
})

const FeedStack = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: navOptionHandler
    },
    FeedDetails: {
        screen: FeedDetails,
        navigationOptions: navOptionHandler
    }
})

const SearchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: navOptionHandler
    },
    SearchDetails: {
        screen: SearchDetails,
        navigationOptions: navOptionHandler
    }
})


const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({tintColor}) => (
        <Image 
          source={IMAGE.ICON_PICTURE_DEFAULT}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      )
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Image 
          source={IMAGE.ICON_PICTURE_DEFAULT}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      ),
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 15
    },

  }
});

const MainStack = createStackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  Setting: {
    screen: Setting,
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
  initialRouteName: 'auth'
})

export default class App extends Component {
  render() {
    const AppNavigator = createAppContainer(app);
    return (
        <AppNavigator/>
    )
  }
}
