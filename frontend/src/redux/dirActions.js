import axios from "axios";
import { hostName } from "../config";

export const CREATE_DIR = "CREATE_DIR";


export const createDir = (dirName) => {
  const dirObj = {
    dirName,
    type:"directory"
  }
  let responseData ;
  axios.post(`${hostName}/users/createDirectory`,{dirObj}).then((res)=>{
    responseData = res.data;
  })
  .catch((error)=>{
    console.log(error)
  })

  return {type: CREATE_DIR,data:responseData}
}

export const deleteDir = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const updateDir = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});




