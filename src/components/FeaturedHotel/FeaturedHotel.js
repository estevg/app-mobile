import React from 'react';
import { TouchableOpacity, Image, Text, Dimensions } from 'react-native'


const FeauredHotel = ({data}) => {
    const { height, width } = Dimensions.get('window')
    return (
    <TouchableOpacity style={{ width: 150, margin: 20, }}>
        <Image source={{uri: `${data.imagenes[1].url}`}} style={{ width: '100%', height: 100, resizeMode: "cover", borderRadius: 20}}/>
    </TouchableOpacity> );
}
 
export default FeauredHotel;