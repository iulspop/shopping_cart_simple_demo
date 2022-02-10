import { combineReducers } from 'redux'
import products from './reducers/productsReducer'
import cartItems from './reducers/cartItemsReducer'

const rootReducer = combineReducers({ products, cartItems })

export default rootReducer
