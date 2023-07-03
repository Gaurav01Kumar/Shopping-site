import {combineReducers} from "redux"
import { productReducer,selectProductReducer, productImageReducer ,addToCartReducers} from "./productReducer"

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,
    productImage:productImageReducer,
    cartProduct:addToCartReducers,
});
export default reducers