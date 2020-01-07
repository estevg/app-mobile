import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {createLogger} from 'redux-logger'

const initialState = {};

const logger = createLogger();

const middelware = [thunk, logger];

const store = createStore( 
    rootReducer,
    initialState,
    applyMiddleware(...middelware)
);

export default store