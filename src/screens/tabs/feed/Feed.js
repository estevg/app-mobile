import React, { Component, useEffect } from 'react'
import { View, StyleSheet, ScrollView, TextInput, SafeAreaView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import {Text } from 'native-base'
import CustomHeader from '../../../components/CustomHeader'
import { NavigationActions } from 'react-navigation'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerHoteles } from '../../../actions/hotelActions';
import { seleccionarHotel } from '../../../actions/hotelActions';
// Componentes 
import HotelList from '../../../components/HotelList/HotelList';
import FeaturedHotel from '../../../components/FeaturedHotel/FeaturedHotel';


 

const Fedd = (props) => {

const dispatch = useDispatch();

useEffect( () => {
    const cargarHoteles = () => dispatch( obtenerHoteles() )
    cargarHoteles()

}, [dispatch])

const data = useSelector((state => state.hoteles.hoteles));
let hotelDestacado = data.filter( hotel => hotel.puntuacion >= 5)

const viewHotel = item => {
    // console.log(item._id)
    // dispatch( seleccionarHotel(item._id) )

    props.navigation.dispatch(
        NavigationActions.navigate({
            routeName: 'FeedDetails',
            params: {
                id: item._id
            }
        })
    )
}

// const loading = useSelector((state => state.productos.loading));
// const error = useSelector((state => state.productos.error ));

// console.log(data)



    return ( 
        <SafeAreaView style={style.flex}>
            <View style={style.flex}>
                <CustomHeader title='Lista de hoteles' isHome={true} navigation={props.navigation} />
            <ScrollView>
                <View style={style.containerInput}>
                    <TextInput style={style.input} placeholder="Buscar Hotel" placeholderTextColor="gray" />
                </View>
                <View style={style.conatinerTitle} >
                    <Text style={style.titleStyle} >Hoteles Disponibles</Text>
                </View>
                
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ScrollView={true}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => 
                    <HotelList data={item} onPress={() => {viewHotel(item)}} />}
                />

                <View style={style.conatinerTitle} >
                    <Text style={style.titleStyle} >Hoteles Destacados</Text>
                </View>

                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ScrollView={true}
                    data={hotelDestacado}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <FeaturedHotel data={item}  />}
                />
            </ScrollView>
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
    conatinerTitle: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '700'
    }
})
 
export default Fedd;