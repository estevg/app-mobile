import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'native-base'
import CustomHeader from '../../components/CustomHeader'


export class Profile extends Component {

    render() { 
        return ( 
        <View style={{ flex: 1, }}>
            <CustomHeader title='Perfil' navigation={this.props.navigation} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Profile Screen</Text>
          </View>
        </View>
         );
    }
}
 
