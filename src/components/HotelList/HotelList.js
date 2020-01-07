import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native'
import styles from './style'

const HotelList = ({data, onPress}) => {
    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{uri: `${data.imagenes[1].url}`}} style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{data.nombre}</Text>
            <Text style={styles.subtitle}>{data.direccion}</Text>
            <Text style={styles.price}>Precio por noche: ${data.precio}</Text>
        </TouchableOpacity> );
}
 
export default HotelList;