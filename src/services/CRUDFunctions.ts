import { IAddTasks, ILoginData, IRegiterData } from '../models/interface';
import {addTasksApi, instance, loginApi,patchUserApi, taskApi, tasksDelete, userApi} from './ApiRequest';
import axios, {AxiosError} from "axios"


// const registerUser = async (userData: IRegiterData) => {
//     try {
//       const response = await axios.post(registerApi, userData);
//       console.log('Registration successful:', response.data);
//       return response.data;
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         console.error('Registration failed:', (error as AxiosError).response?.data);
//         throw (error as AxiosError).response?.data;
//       } else {
//         console.error('Registration failed:', error);
//         throw error;
//       }
//     }
//   };

const registerUser = async (userData:IRegiterData) => {
  try{
    const response = await instance.post("/auth/register", userData);
    console.log('Registration successful:', response.data);
    return response.data
  }
  catch(error){
    console.error('Registration failed:', error);
  }
}


const loginData = async (userLogin:ILoginData) => {
    try {
        const response = await axios.post(loginApi, userLogin);
        console.log("Login successful", response.data);
        return response.data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
          console.error("Login failed:", (error as AxiosError).response?.data);
          throw (error as AxiosError).response?.data   
      }
      else{
          console.error("Login failed ", error);
          throw error;
      }
    }
}

const userTask = async () => {
  try{
    const response = await axios.get(taskApi,{
    headers:{
      'Content-Type': 'application/json',
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response.data);
  return response.data;
}
  catch(error){
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

const addTasks = async (newTasks:IAddTasks) => {
  try{
    const response = await axios.post(addTasksApi,newTasks,
      {
        headers:{
          'Content-Type': 'application/json',
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
    console.log("Add tasks successful",response);
    
    return response
  }
  catch(error){
    console.error("Add tasks fail:", error);
    throw error
  }
}

const deleteTask = async (tasksId: number) => {
  try{
    const respone = await axios.delete(`${tasksDelete}/${tasksId}`, {
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    return respone
  }catch(error){
    console.error("Fail delete: ", error);
  }
}

const fetchUser = async () => {
  try{
    const response = await axios.get(userApi, {
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data);
    
    return response.data
  }
  catch(error){
    console.error("You dont have ", error);
  } 
}

const patchUser = async (userData:{firstName:string, lastName:string}) => {
  try{
    const response = await axios.patch(patchUserApi, userData,{
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  }
  catch(error){
    console.error("Patch failed ", error);
  }
}


export {registerUser, loginData, userTask, addTasks, deleteTask,fetchUser, patchUser}
