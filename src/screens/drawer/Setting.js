import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import CustomHeader from '../../components/CustomHeader'

export class Setting extends Component {
    render() { 
        return ( 
        <View style={{ flex: 1, }}>
            <CustomHeader title='Setting' navigation={this.props.navigation} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Setting Screen</Text>
          </View>
        </View>
         );
    }
}
 