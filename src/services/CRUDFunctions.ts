import { IAddTasks, IEditUser, ILoginData, IRegiterData, ITaksEdit } from '../models/interface';
import { instance } from './ApiRequest';

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

export const regUser = async (userData:IRegiterData) => {
  try{
      const response = await instance.post('/auth/register', userData);
      const data = response.data;
      return data
  } catch(error){
      console.error("Register fetch fail: ", error);
      throw error
  }
}

export const userTask = async () => {
  try{
    const response = await instance.get(`/tasks?take=10&skip=0`)
    return response.data
}
  catch(error){
    console.error('Error fetching tasks:', error);
    throw error;
  }
}

export const addTasks = async (newTasks:IAddTasks) => {
  try{
    const response = await instance.post('/tasks', newTasks)
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


export const deleteTask = async (tasksId: number) => {
  try{
    const response = await instance.delete(`tasks/${tasksId}` )
    return response
  }
  catch(error){
    console.error("Fail delete: ", error);
    throw error
  }
}

export const editTask = async (taskId: number, updateTask:ITaksEdit) => {
  try{
    const response = await instance.patch(`/tasks/${taskId}`, updateTask)
    return response.data
  }
  catch(error){
    console.error(error);
    throw error
  }
}

export const fetchUser = async () => {
  try{
    const response = await instance.get('/users/profile')
    return response.data
  }
  catch(error){
    console.error("You dont have ", error);
  } 
}

export const patchUser = async (userData:IEditUser) => {
  try{
    const response = await instance.patch("/users/profile", userData)
    return response.data
  }
  catch(error){
    console.error("Patch failed ", error);
    throw error
  }
}

export const patchingPassword = async (data: string) => {
  try{
    const response = await instance.patch('auth/password', data)
    return response.data
  }
  catch(error){
    console.error(error);
    throw error
  }
}