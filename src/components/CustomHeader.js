import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'
import {IMAGE} from './constans/image'



class CustomHeader extends Component {
    render() { 
        const {title, isHome} = this.props
        return ( 
            <Header style={{backgroundColor: "white"}}>
            <Left>
            {
                isHome ? 
                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Image 
                    source={IMAGE.ICON_MENU}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                />
                </Button> : 
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Image 
                    source={IMAGE.ICON_BACK_DEFAULT}
                    resizeMode="contain"
                    style={{width: 20, height: 20}}
                />
                </Button>
            }
            </Left>
            <Body>
                <Title style={{color: "black"}}>{title}</Title>
            </Body>
        </Header>
         );
    }
}
 
export default CustomHeader

 
