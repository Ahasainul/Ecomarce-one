import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart:[]
  }
export const cartSlice =createSlice({
    name:"carts",
    initialState,
    reducers: {
        addCart:(state , action) =>{
            state.cart.push(action.payload); 
         },


        removCart:(state , action) =>{},
    },
})
export const {addCart, removCart} = cartSlice.actions;
export default cartSlice.reducer;