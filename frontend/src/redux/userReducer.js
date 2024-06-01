import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { hostName } from "../config";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await axios.post(`${hostName}/users/login`, userCredentials);
        const response = await request.data;
        localStorage.setItem("user", JSON.stringify(response));
        return response;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userData: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true,
                state.userData = null,
                state.error = action.payload
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false,
                state.userData = action.payload,
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false,
                state.userData = null,
                state.error = action.payload
            })
    }
});




export default userSlice.reducer;