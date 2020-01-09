import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native'

const Gallery = ({imagen}) => {
    return ( 
        <Image source={{uri: imagen.url}} style={style.imageStyle} />
     );
}

const style = StyleSheet.create({
    imageStyle: {
        width: '99%',
        height: 200,
        resizeMode: "cover"
    }
})
 
export default Gallery;