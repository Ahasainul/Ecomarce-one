import { createSlice } from '@reduxjs/toolkit'
import Proadct from '../components/Proadct';
const initialState = {
    cart:[]
  }
export const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers: {
        addCart:(state , action) => {
            let index = state.cart.findIndex(
                (Proadct) => Proadct.id === action.payload.id
            );
            if (index !== -1) {
                state.cart[index].qun += 1;
            } else {
                state.cart.push(action.payload);
            }
         },


        removCart: (state , action) => {
            let index = state.cart.findIndex(
                (Proadct) => Proadct.id === action.payload.id
            );
            if (index !== -1) {
                state.cart.splice(index, 1);
                
            }
        },
    },
})
export const {addCart, removCart} = cartSlice.actions;
export default cartSlice.reducer;