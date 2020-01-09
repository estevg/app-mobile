import React, { useEffect, } from 'react'
import { View, StyleSheet, ScrollView,  SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native'
import CustomHeader from '../../../components/CustomHeader'
import { NavigationActions } from 'react-navigation'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerHoteles } from '../../../actions/hotelActions';
// Componentes 
import HotelList from '../../../components/HotelList/HotelList';
import FeaturedHotel from '../../../components/FeaturedHotel/FeaturedHotel';


 

const Hotel = (props) => {

const dispatch = useDispatch();

useEffect( () => {
    const cargarHoteles = () => dispatch( obtenerHoteles() )
    cargarHoteles()

}, [dispatch])

const data = useSelector((state => state.hoteles.hoteles));
let hotelDestacado = data.filter( hotel => hotel.puntuacion >= 5)

const viewHotel = item => {
    props.navigation.dispatch(
        NavigationActions.navigate({
            routeName: 'HotelDetails',
            params: {
                id: item._id
            }
        })
    )
}

const searchHotel = () => {
    props.navigation.dispatch(
        NavigationActions.navigate({
            routeName: 'Search',
        })
    )
}

    return ( 
        <SafeAreaView style={style.flex}>
            <View style={style.flex}>
                <CustomHeader title='Lista de Hoteles' isHome={true} navigation={props.navigation} />
            <ScrollView>
                <TouchableOpacity style={style.containerInput} onPress={() => {searchHotel()}}>
                    <Text style={style.input} > Buscar Hotel...</Text>
                </TouchableOpacity>
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
                    renderItem={({item, index}) => 
                    <FeaturedHotel data={item} onPress={() => {viewHotel(item)}} />}
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
        borderColor: "#1e272e",
        paddingHorizontal: 20,
        marginHorizontal: 20,
        paddingTop: 20
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
 
export default Hotel;