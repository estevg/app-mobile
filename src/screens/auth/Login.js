import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'native-base'

export class Login extends Component {
    render() { 
        return ( 
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Login Screen</Text>
                    <Button 
                    light style={{marginTop: 10, padding: 10}}
                    onPress={() => this.props.navigation.navigate('app')}
                    >
                        <Text>Login</Text>
                    </Button>
                    <Button 
                    light style={{marginTop: 10, padding: 10}}
                    onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text>Register</Text>
                    </Button>
          </View>
         );
    }
}
 
