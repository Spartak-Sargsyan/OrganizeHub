import { IAddTasks, ILoginData } from '../models/interface';
import { instance, patchUserApi} from './ApiRequest';
import axios from "axios"

export const loginUser = async (userData:ILoginData) => {
  try{
    const response = await instance.post('/auth/login', userData)
    const data = await response.data
    return data
  }
  catch(error){
    console.error("Log err", error);
    throw error
  }
}




const userTask = async () => {
  try{
    const response = await instance.get('/tasks?take=10&skip=0')
    // const data = response.data;
    return response.data
}
  catch(error){
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

const addTasks = async (newTasks:IAddTasks) => {
  try{
    const response = await instance.post('/tasks',newTasks)
    return response.data
  }
  catch(error){
    console.error("Add tasks fail:", error);
    throw error
  }
}

export const fetchingOneTask = async (taskId: number) =>{
  try{
    const response = await instance.get(`/tasks/${taskId}`)
    return response.data
  }
  catch(error){
    console.error("One error", error);
  }
}


const deleteTask = async (tasksId: number) => {
  try{
    const response = await instance.delete(`tasks/${tasksId}` )
    return response
  }
  catch(error){
    console.error("Fail delete: ", error);
    throw error
  }
}

const fetchUser = async () => {
  try{
    const response = await instance.get('/users/profile')
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


export {  addTasks, deleteTask,fetchUser, userTask, patchUser }
