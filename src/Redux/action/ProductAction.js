import { ActionType } from "../Contants/action-type"
export const setProducts=(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    };
};
export const selectProducts=(product)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product,
    };
};
export const ProductImage=(product)=>{
       return {
        type:ActionType.PRODUCT_IMAGE,
        payload:product,
       }
} 
export const addToCart=(product)=>{
    return {
        type:ActionType.ADD_TO_CART,
        payload:product
    }
}