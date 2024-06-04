import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostName } from "../config";
import { LOGOUT } from "./authReducer";

export const loginUser = createAsyncThunk(
     'user/loginUser',
     async (userCredentials) => {
        try {
            const request = await axios.post(`${hostName}/users/login`, userCredentials);
            const response = request.data;  // Corrected this line to get the actual data
            localStorage.setItem("user", JSON.stringify(response));
            return response;
        }
        catch(error) {
            return error.response.data;
        }
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
                state.loading = true;
                state.userData = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action);
                state.loading = false;
                state.userData = null;
                state.error = action.error.message || "Failed to login";
            })
            .addCase(LOGOUT, (state) => {
                state.loading = false;
                state.userData = null; // Clear userData on logout
                state.error = null;
            });
    }
});

export default userSlice.reducer;
