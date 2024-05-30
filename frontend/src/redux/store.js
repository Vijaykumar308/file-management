import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import dirReducer, { fetchDirectories } from "./dirReducer";
import authReducer from "./authReducer";



const store = configureStore({
    reducer: {
        user: userReducer,
        dir:dirReducer,
        auth:authReducer,
    }
});


export default store; 