import {combineReducers} from 'redux';
import { productReducer, selectedProductsReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
})

export default reducers