
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const createUser = createAsyncThunk(
  'user/createUser',
  async (requestData) => {
    try {
      const response = await axios.post('https://api.example.com/items', requestData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create item');
    }
  }
);


// User slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        age: 0,
        address: {
          street: "",
          city: "",
        },
        loading: false,
        error: null,
        items: [], // Assuming you want to store created items here
    },
    reducers: {
      setName(state, action) {
        state.name = action.payload;
      },
      setAge(state, action) {
        state.age = action.payload;
      },
      setAddress(state, action) {
        state.address = action.payload;
      },
    },
    extraReducers: builder => {
      builder
        .addCase(createUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export default userSlice;