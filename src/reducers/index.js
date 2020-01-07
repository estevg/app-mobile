import { combineReducers } from 'redux';
import hotelReducers from './hotelReducers'

export default combineReducers({
    hoteles: hotelReducers
})