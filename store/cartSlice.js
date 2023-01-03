import { createSlice } from "@reduxjs/toolkit";

const initialState = []




const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item?._id === action.payload._id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
     
      const item = state.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        return;
      } else {
        item.quantity--;
      }
      // if (item.quantity === 1) {
      //   const index = state.findIndex((item) => item._id === action.payload);
      //   state.splice(index, 1);
      // } 
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item._id === action.payload);
      state.splice(index, 1);
    },
    updateCartAfterRefresh: (state, action) => {
      state.push(...action.payload)
    }
  },
});


export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  updateCartAfterRefresh
} = cartSlice.actions;

export default cartSlice.reducer;