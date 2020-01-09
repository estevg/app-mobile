import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Modal, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native'
//Components
import CustomHeader from '../../../components/CustomHeader'
import Gallery from '../../../components/Gallery/Gallery'
// Action
import { seleccionarHotel } from '../../../actions/hotelActions';

// Redux
import { useDispatch, useSelector } from 'react-redux'


const HotelDetails = (props) => {
    // Extraer la informacion del state
    const data = useSelector((state => state.hoteles.hotel))
    //
    const {nombre, direccion, precio, puntuacion, telefono, informacion, imagenes, loc} = data
    // Llamar dispatch para ejecutar la acción
    const dispatch = useDispatch();
    // Traer el ID
    const { id } = props.navigation.state.params
    // Ejecutar la acción
    useEffect(() => {
        dispatch( seleccionarHotel(id) )
    }, [dispatch, id])
    
    
    if(!imagenes) return null
    
    const { height, width } = Dimensions.get('window')
    return ( 
        <SafeAreaView>
            <CustomHeader title='Detalles del Hotel' navigation={props.navigation} />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {imagenes.map((imagen, index) => (
                        <View key={index} style={{flex: 1, flexDirection: 'row', width: width}}>
                            <Gallery imagen={imagen}  />
                        </View>    
                ))}
            </ScrollView>

            <View style={{ margin: 20, paddingHorizontal: 10}}>
                <Text style={{fontSize: 25, fontWeight: '700'}}>{nombre}</Text>
            </View>

            <View style={{ margin: 20, paddingHorizontal: 10}}>
                <Text style={{fontSize: 17, fontWeight: '700'}} >Información del hotel:</Text> 
                <Text style={{fontSize: 15, fontWeight: '400'}}>{informacion}</Text>
                <Text style={{fontSize: 17, fontWeight: '700', marginTop: 5}}>Precio por noche:</Text>
                <Text style={{fontSize: 15, fontWeight: '400', marginTop: 5}}>COP ${precio}</Text>
            </View>
             <Image style={{width: 50, height: 50}} source={{uri: 'https://maps.googleapis.com/maps/api/staticmap?center=Albany,+NY&zoom=59&scale=1&size=600x300&maptype=roadmap&key=AIzaSyAJDcg1Cb-MuT4dHoLrSJOcedbvl7fsbjA&format=png&visual_refresh=true'}} />       
            
          </SafeAreaView>
     );
}
 
export default HotelDetails;

 


