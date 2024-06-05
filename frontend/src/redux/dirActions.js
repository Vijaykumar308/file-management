import axios from "axios";
import { hostName } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CREATE_DIR = "CREATE_DIR";
export const FETCH_ALL_DIR = "FETCH_ALL_DIR";


export const createDir = (dirName, userId) => {
  const dirObj = {
    userId,
    dirName,
    type:"directory"
  }
  let responseData;
  axios.post(`${hostName}/users/createDirectory`,{dirObj}).then((res)=>{
    responseData = res.data;
  })
  .catch((error)=>{
    console.log(error)
  })

  return {type: CREATE_DIR, payload:responseData}
}

// export const fetchDirectories = (userId) => {
//   let allDirectories;
//   axios.post(`${hostName}/users/fetchDirectories`,{user_id:userId}).then((res)=>{
//     allDirectories = res.data;
//   })
//   .catch((error)=>{
//       console.log(error)
//   })
//   console.log("allDirectories",allDirectories);
//   return {type: FETCH_ALL_DIR, payload: allDirectories};
// }


// export const fetchDirectories = createAsyncThunk(
//   FETCH_ALL_DIR,
//   async (userId, thunkAPI) => {
//     try {
//       const response = await axios.post(`${hostName}/users/fetchDirectories`, { user_id: userId });
//       return response.data; // This will be the action.payload
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const deleteDir = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const updateDir = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});




