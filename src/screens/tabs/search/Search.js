import React, { Component } from 'react';
import { View } from 'react-native'
import CustomHeader from '../../../components/CustomHeader'
import { Text, Button } from 'native-base'

export class Search extends Component {
    
    render() { 
        return ( 
        <View style={{ flex: 1, }}>
            <CustomHeader title='Search' isHome={true} navigation={this.props.navigation} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Search</Text>
              <Button light onPress={() => this.props.navigation.navigate('SearchDetails')}>
                  <Text>Go to Search Detaiks</Text>
              </Button>
          </View>
        </View>
         );
    }
}
