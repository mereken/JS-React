import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMeals, getMealById } from "../services/mealService"; 

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (query) => {
    const data = await searchMeals(query);
    return data;
  }
);

export const fetchItemById = createAsyncThunk(
  "items/fetchItemById",
  async (id) => {
    const data = await getMealById(id);
    return data;
  }
);

const initialState = {
  list: [],
  selectedItem: null,
  loadingList: false,
  loadingItem: false,
  errorList: null,
  errorItem: null,
  query: "" 
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload;
        state.query = action.meta.arg; 
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.error.message;
      })

      .addCase(fetchItemById.pending, (state) => {
        state.loadingItem = true;
        state.errorItem = null;
        state.selectedItem = null; 
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loadingItem = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loadingItem = false;
        state.errorItem = action.error.message;
      });
  },
});

export const { clearSelectedItem } = itemsSlice.actions;
export default itemsSlice.reducer;