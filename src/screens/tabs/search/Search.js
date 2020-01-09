import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Text, ScrollView, Image } from 'react-native'
import CustomHeader from '../../../components/CustomHeader'
import Hotel from '../../../components/Hotel/Hotel'
import { NavigationActions } from 'react-navigation'
//Redux 
import { useDispatch, useSelector } from 'react-redux'
// Acción
import { buscarHotel } from '../../../actions/hotelActions'

const Search = (props) => {
    const dispatch = useDispatch()

    const busqueda = (hotel) => dispatch( buscarHotel(hotel) )


    const searchHotel = text => {
        if(text !== ''){
            busqueda(text)

        }else{
            busqueda()
        }
    }
    const data = useSelector((state => state.hoteles.busqueda));

    const viewHotel = hotel => {
        props.navigation.dispatch(
            NavigationActions.navigate({
                routeName: 'HotelDetails',
                params: {
                    id: hotel._id
                }
            })
        )
    }
        
    
    
    return ( 
    <SafeAreaView style={style.flex}>
        <View style={{ flex: 1, }}>
            <CustomHeader title='' navigation={props.navigation} />
            <View style={{ flex: 1}}>
                    <View style={style.containerInput}>
                        <TextInput style={style.input} placeholder="Buscar Hotel"  placeholderTextColor="gray" 
                        onChangeText={text => searchHotel(text)}  />
                    </View>
            <ScrollView style={{margin: 20, paddingHorizontal: 20}}>
                {data.map((hotel, index) => (
                    <View key={index}>
                        <Hotel hotel={hotel} onPress={() => {viewHotel(hotel)}} />
                    </View>
                ))}
            </ScrollView>
            </View>
        </View>
    </SafeAreaView>
     );
}

const style = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerInput: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    input: {
        fontWeight: '700',
        height: 60,
        borderRadius: 10,
        fontWeight: '700',
        borderWidth: 2,
        borderColor: "#dddddd",
        paddingHorizontal: 20,
        marginHorizontal: 20
    },
})
 
export default Search;