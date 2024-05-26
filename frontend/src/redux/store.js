import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import dirReducer from "./dirReducer";


const store = configureStore({
    reducer: {
        user: userReducer,
        dir:dirReducer
    }
});

export default store; 