import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    setOrder: (state, action) => {
      return action.payload;
    },
    updateOrderField: (state, action) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    addNewField: (state, action) => {
      const { newField, value } = action.payload;
      return { ...state, [newField]: value };
    },
    updateWeight: (state, action) => {
      const { id, quantity } = action.payload;
      console.log(state);

      const item = state?.food.find((item) => item.id === id);

      if (item) {
         item.weightInGram = parseInt(quantity);
        
      }
      
    },
  },
});

export const { setOrder, updateOrderField, addNewField, updateWeight } = orderSlice.actions;
export const selectOrder = (state) => state.order;
export default orderSlice.reducer;
