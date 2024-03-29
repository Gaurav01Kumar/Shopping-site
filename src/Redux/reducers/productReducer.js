import { ActionType } from "../Contants/action-type"

const intialState={
    products:[]
}
const intialCart={
    carts:[]
}
export const productReducer=(state=intialState,{type,payload})=>{
     switch(type){
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload};
        default :
        return state;

     }
}
export const selectProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionType.SELECTED_PRODUCT:
            return {...state,...payload};
            default:
                return state
    }
};
export const  productImageReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionType.PRODUCT_IMAGE:
            return {...state,...payload};
        default :
        return state;
    }
}
export const addToCartReducers=(state=intialCart,{type,payload})=>{
    switch(type){
        case ActionType.ADD_TO_CART:
            return {...state,carts:[...state.carts,payload]};
        default:
            return state;
    }
}

