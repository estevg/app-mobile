import {
    COMENZAR_DESCARGA_HOTELES,
    DESCARGA_HOTELES_EXITOSA,
    DESCARGA_HOTELES_ERROR,
    COMENZAR_SELECCIONAR_HOTEL,
    SELECCIONAR_HOTEL_EXITOSA, 
    SELECCIONAR_HOTEL_ERROR,
    COMENZAR_BUSQUEDA_HOTELES,
    BUSQUEDA_HOTELES_EXITOSA,
    BUSQUEDA_HOTELES_ERROR
} from '../types'


import clienteAxios from '../config/axios'


/// Acción para buscar todos los hoteles
export function obtenerHoteles(){    
    return(dispatch) => {
        dispatch( obtenerHotelesComienzo() )

        clienteAxios.get('/hotel')
        .then( respuesta => {
            // console.log(respuesta)
            dispatch(  obtenerHotelesExitoso(respuesta.data)  )
        })
        .catch(error => {
            // console.log(error)
            dispatch( obtenerHotelesError() )
        })

    }
}

export const obtenerHotelesComienzo = () => ({
    type: COMENZAR_DESCARGA_HOTELES
})

export const obtenerHotelesExitoso = hoteles => ({
    type: DESCARGA_HOTELES_EXITOSA,
    payload: hoteles
})

export const obtenerHotelesError = () => ({
    type: DESCARGA_HOTELES_ERROR
})


// Acción cuando seleccionan un hotel
export function seleccionarHotel(id){
    return(dispatch) => {
        dispatch( comenzarSeleccionHotel() )

        clienteAxios.get(`/hotel/buscar/${id}`)
        .then(respuesta => {
            // console.log(respuesta)
            dispatch( seleccionHotelExitosa(respuesta.data) )
        })
        .catch( error => {
            // console.log(error)
            dispatch( seleccionHotelError() )
        })
    }
} 

export const comenzarSeleccionHotel = () => ({
    type: COMENZAR_SELECCIONAR_HOTEL
})

export const seleccionHotelExitosa = hotel => ({
    type: SELECCIONAR_HOTEL_EXITOSA,
    payload: hotel
})

export const seleccionHotelError = () => ({
    type: SELECCIONAR_HOTEL_ERROR
})

// Acción para buscar hoteles especificos 

export function buscarHotel(text){
    return(dispatch) => {
        dispatch( comenzarBuscarHotel() )

        clienteAxios.get(`/hotel/buscar/${text}`)
        .then( resultado => {
            // console.log(resultado.data)
            dispatch( busquedaHotelExitosa(resultado.data) )
        })
        .catch(error => {
           dispatch( busquedaHotelError() )
        })
    }
}

export const comenzarBuscarHotel = () => ({
    type: COMENZAR_BUSQUEDA_HOTELES
})

export const busquedaHotelExitosa = busqueda => ({
    type: BUSQUEDA_HOTELES_EXITOSA,
    payload: busqueda
})

export const busquedaHotelError = () => ({
    type: BUSQUEDA_HOTELES_ERROR
})