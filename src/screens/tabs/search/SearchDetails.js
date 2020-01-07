import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import CustomHeader from '../../../components/CustomHeader'



export class SearchDetails extends Component {
    render() { 
        return ( 
        <View style={{ flex: 1, }}>
            <CustomHeader title='Search Details' navigation={this.props.navigation} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Search Details</Text>
          </View>
        </View>
         );
    }
}
 
