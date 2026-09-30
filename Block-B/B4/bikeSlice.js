import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBikes = createAsyncThunk(
  "bike/fetchBikes",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/api/bikes/");
      if (!res.ok) {
        return thunkAPI.rejectWithValue("Network response was not ok");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const bikeSlice = createSlice({
  name: "bike",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { addItem, removeItem } = bikeSlice.actions;
export default bikeSlice.reducer;
