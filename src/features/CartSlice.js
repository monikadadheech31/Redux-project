import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

 const cardSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart : (state , action)=>{
      let find = state.cart.findIndex((item)=> item.id === action.payload.id)
      if(find >= 0){
        state.cart[find].quantity += 1
      }
      else{
        state.cart.push({...action.payload, quantity : 1})
      }
    },
    
      getCartTotal : (state) =>{
     let {totalQuantity, totalPrice } = state.cart.reduce(
      (cartTotal, cartItem) =>{
        console.log("cartTotal", cartTotal);
        console.log("cartItem", cartItem);
        const {price, quantity} = cartItem
        console.log(price,quantity);
        const itemTotal = price * quantity;
        cartTotal.totalPrice += itemTotal;
        cartTotal.totalQuantity += quantity;
        return cartTotal
        
      }, 
      { totalPrice: 0,
        totalQuantity : 0
      }
    )
     state.totalPrice = parseFloat(totalPrice.toFixed(2));
     state.totalQuantity = totalQuantity
      },
    
      increaseQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
      },
      decreaseQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        cardSlice.caseReducers.getCartTotal(state);
      }
  },
});

export const {addtocart, getCartTotal, increaseQuantity, decreaseQuantity,removeFromCart} = cardSlice.actions;
export default cardSlice.reducer;
