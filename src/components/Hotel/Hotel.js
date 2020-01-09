import React from 'react';
import { View, StyleSheet,  Text,  Image, TouchableOpacity } from 'react-native'
const Hotel = ({hotel, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <Image style={style.image} source={{uri: `${hotel.imagenes[1].url}`}} />
                <Text style={style.text}>{hotel.nombre}</Text>
            </View>
        </TouchableOpacity>
     );
}


const style = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10,
        fontWeight: '700',
        borderWidth: 2,
        borderColor: "#7f8c8d", marginBottom: 20 
    },
    image: {
        width:150, 
        height:100, 
        resizeMode: "cover",
    },
    text: {
        width: 150, 
        marginLeft: 10, 
        fontSize: 15, 
        fontWeight: '700'
    }
})

export default Hotel;