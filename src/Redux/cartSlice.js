// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const foodItems = [
  {
    id: 1,
    checked: true,
    title: "Tree ChuiJhal",
    weight: "৫০০ গ্রাম",
    weightInEN: "500 g",
    weightInGram: 500,
    price: 460,
    priceInBd: "460",
    quantity: 1,
    photo:
      "/media/product/product-gach-chui.jpg",
    
  },
  {
    id: 2,
    checked: false,
    title: "Tree ChuiJhal",
    weight: "১ কেজি",
    weightInEN: "500 g",
    weightInGram: 1000,
    price: 920,
    priceInBd: "920",
    quantity: 1,
    photo:
      "/media/product/product-gach-chui.jpg",
  },
  {
    id: 3,
    checked: false,
    title: "Etu ChuiJhal",
    weight: "৫০০ গ্রাম",
    weightInEN: "500 g",
    weightInGram: 500,
    price: 600,
    priceInBd: "600",
    quantity: 1,
    photo:
      "/media/product/product-eto-chui.jpg",
    
  },
  {
    id: 4,
    checked: false,
    title: "Etu ChuiJhal",
    weight: "১ কেজি",
    weightInEN: "1 kg",
    weightInGram: 1000,
    price: 1150,
    priceInBd: "1150",
    quantity: 1,
    photo:
    "/media/product/product-eto-chui.jpg",
    
  },
  {
    id: 5,
    checked: false,
    title: "Mixed ChuiJhal",
    weight: "৫০০ গ্রাম",
    weightInEN: "500 g",
    weightInGram: 500,
    price: 550,
    priceInBd: "550",
    quantity: 1,
    photo:
      "/media/product/product-mixed-chui.jpg",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: JSON.parse(localStorage.getItem("foods"))
    //   ? JSON.parse(localStorage.getItem("foods"))
    //   : foodItems,
    items: foodItems,
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.checked) {
        existingItem.checked = false;
      } else {
        existingItem.checked = true;
      }
      // let foodData = JSON.stringify(current(state.items));
      // localStorage.setItem("foods", foodData);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = parseInt(quantity);
      }
      // let foodData = JSON.stringify(current(state.items));
      // localStorage.setItem("foods", foodData);
    },
  },
});

export const { addItem, updateQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
