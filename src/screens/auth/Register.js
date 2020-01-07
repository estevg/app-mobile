import React, { Component } from 'react';
import { View, Text } from 'react-native'
import CustomHeader from '../../components/CustomHeader';

export class Register extends Component {
    render() { 
        return ( 
        <View style={{ flex: 1, }}>
            <CustomHeader title='Register' navigation={this.props.navigation} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Register Screen</Text>
          </View>
        </View>
         );
    }
}
 
