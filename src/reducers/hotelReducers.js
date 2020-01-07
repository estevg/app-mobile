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

const initialState = {
    hoteles: [],
    error: null,
    loading: false,
    hotel: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case COMENZAR_DESCARGA_HOTELES:
            return {
                ...state,
                loading: true,
                hotel: {}
            }
        case DESCARGA_HOTELES_EXITOSA: 
            return {
                ...state,
                loading: false,
                hoteles: action.payload,
                hotel: {}
            }
        case DESCARGA_HOTELES_ERROR: 
            return {
                ...state,
                hoteles: [],
                error: true,
                loading: false,
                hotel: {}
            }
        case COMENZAR_SELECCIONAR_HOTEL: 
            return {
                ...state,
                loading: true,
                hotel: {}
            }
        case SELECCIONAR_HOTEL_EXITOSA: 
            return {
                ...state,
                loading: false,
                hotel: action.payload
            }
        case SELECCIONAR_HOTEL_ERROR: 
            return {
                ...state,
                hotel: {},
                error: true,
                loading: false
            }
            default:
                return state;
    }
}