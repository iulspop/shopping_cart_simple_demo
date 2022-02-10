import {combineReducers} from 'redux'
import cartItems from './cartItems'
import products from './products'

const rootReducer = combineReducers({ cartItems, products })

export default rootReducer
