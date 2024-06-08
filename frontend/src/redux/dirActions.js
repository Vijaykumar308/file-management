import axios from "axios";
import { hostName } from "../config";

export const CREATE_DIR = "CREATE_DIR";
export const FETCH_ALL_DIR = "FETCH_ALL_DIR";


export const createDir = (dirName, userId, parent_directory_id) => {
  const dirObj = {
    userId,
    dirName,
    type:"directory",
    parent_directory_id
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



export const deleteDir = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const updateDir = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});




