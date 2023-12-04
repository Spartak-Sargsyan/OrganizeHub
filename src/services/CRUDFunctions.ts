import { IAddTasks, ILoginData, IRegiterData } from '../models/interface';
import {addTasksApi, loginApi,registerApi, taskApi, tasksDelete} from './ApiRequest';
import axios, {AxiosError} from "axios"



const registerUser = async (userData: IRegiterData) => {
    try {
      const response = await axios.post(registerApi, userData);
      console.log('Registration successful:', response.data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Registration failed:', (error as AxiosError).response?.data);
        throw (error as AxiosError).response?.data;
      } else {
        console.error('Registration failed:', error);
        throw error;
      }
    }
  };

const loginData = async (userLogin:ILoginData) => {
    try {
        const response = await axios.post(loginApi, userLogin);
        console.log("Login successful", response.data.firstName);
        return response.data;
    }
    catch (error){
      if(axios.isAxiosError(error)){
        console.error("Login failed:", (error as AxiosError).response?.data);
        throw (error as AxiosError).response?.data   
      }
      else{
        console.error("Login failed", error);
        throw error;
      }
    }
}

const userTask = async () =>{
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

export {registerUser, loginData, userTask, addTasks, deleteTask}
