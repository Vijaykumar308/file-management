import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_DIR, FETCH_ALL_DIR } from "./dirActions";
import axios from "axios";
import { hostName } from "../config";

const initialState = {
  dir: [],
  status: 'idle',
  error: null
};

// Define the async thunk
export const fetchDirectories = createAsyncThunk(
  'dir/fetchDirectories', // Action type
  async (obj, thunkAPI) => {
    const {userId, parent_dir_id} = obj;
    try {
      const response = await axios.post(`${hostName}/users/fetchDirectories`, { user_id: userId, parent_directory_id:parent_dir_id});
      return response.data; // This will be the action.payload
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const dirReducer = createSlice({
  name: 'dir',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDirectories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDirectories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dir = action.payload;
      })
      .addCase(fetchDirectories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});



export default dirReducer.reducer;