import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Modal, ScrollView, TouchableOpacity, Image} from 'react-native'
import CustomHeader from '../../../components/CustomHeader'


import { seleccionarHotel } from '../../../actions/hotelActions';


// Redux
import { useDispatch, useSelector } from 'react-redux'


const FeedDetails = (props) => {

    const dispatch = useDispatch();
    
    // console.log(props.navigation.state.params)

    const { id } = props.navigation.state.params

    useEffect(() => {
        dispatch( seleccionarHotel(id) )
    }, [dispatch, id])

    const data = useSelector((state => state.hoteles.hotel))
    const {nombre, direccion, precio, puntuacion, telefono, informacion, imagenes} = data
    if(!imagenes) return null;
    return ( 
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title='Feed Details' navigation={props.navigation} />
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text>{nombre}</Text>
            </View>
            <View>
                
            </View>
          </SafeAreaView>
     );
}
 
export default FeedDetails;

 


