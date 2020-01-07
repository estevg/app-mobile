import React, { Component } from 'react';
import AppNavigator from './src'
import store from './src/store'
import {Provider } from 'react-redux'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Provider store={store}>
        <AppNavigator />
      </Provider>
     );
  }
}
 
export default App;
