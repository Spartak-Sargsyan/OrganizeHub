import { IAddTasks } from '../models/interface';
import { instance, patchUserApi} from './ApiRequest';
import axios from "axios"



const userTask = async () => {
  try{
    const respone = await instance.get('/tasks?take=10&skip=0')
    return respone.data
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

const deleteTask = async (tasksId: number) => {
  try{
    const respone = await instance.delete(`tasks/${tasksId}` )
    return respone
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
