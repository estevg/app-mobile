import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native'
import {Text, List, ListItem} from 'native-base'
import { IMAGE } from './components/constans/image'

export class SideMenu extends Component {
    render() { 
        return ( 
            <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, alignItems: "center", justifyContent: "center"}}>
              <Image 
                  source={IMAGE.USER}
                  style={{ height: 120, width: 120, borderRadius:60}}          
              />
            </View>
            <ScrollView>
              <List>
                {/* <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
                  <Text>Setting</Text>
                </ListItem> */}
                <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                  <Text>Perfil</Text>
                </ListItem>
              </List>
            </ScrollView>
            <List>
                <ListItem noBorder 
                onPress={() => this.props.navigation.navigate('auth')} >
                  <Text>Cerrar Sesión</Text>
                </ListItem>
              </List>
          </SafeAreaView>
         );
    }
}
 
