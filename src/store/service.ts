import { IAddTasks, ILoginData, IRegiterData } from "../models/interface";
import { instance } from "../services/ApiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchingOneTask, loginUser, userTask, deleteTask as deleteTaskService, addTasks, editTask } from "../services/CRUDFunctions";


export const fetchingRegister = createAsyncThunk(
    'auth/regsiter',
    async (userData:IRegiterData) => {
        try{
            const response = await instance.post('/auth/register', userData);
            const data = response.data;
            console.log(data); 
            return data
        } catch(error){
            console.error("Register fetch fail: ", error);
            throw error
        }
    } 
);

export const  fetchingLogin = createAsyncThunk(
    'auth/login',
    async (userData:ILoginData)=>{
        try{
            const response = await loginUser(userData)
            return response
        }
        catch(error){
            console.error("Login ", error);
            
        }
    }
) 


export const fetchingTasks = createAsyncThunk(
    'user/tasks',
    async () => {
        try{
            const { data } = await userTask();
            return data
        }
        catch(error){
            console.error('Failed to fetch tasks:', error);
            throw error
        }
    }
)

export const deleteTasks = createAsyncThunk(
    'tasks/delete',
    async (tasksId:number) => {
        try{
            await deleteTaskService(tasksId);
            return tasksId
        }
        catch(error){
            console.error(error);
            throw error
        }
    }
)

export const fetchOneTask = createAsyncThunk(
    'tasks/oneTask',
    async (taskId:number) => {
        try{
            const {data} = await fetchingOneTask(taskId)
            return data;
        }
        catch(error){
            console.error(error);
            throw error
        }
    }
)

export const createTask = createAsyncThunk(
    "tasks/newTask",
    async (newTasks:IAddTasks)=>{
        try{
            const response = await addTasks(newTasks);
            return response
        }
        catch(error){
            console.error(error);
            throw error
        }
    }
)



export const patchingTask = createAsyncThunk(
    'tasks/editTask',
    async ({taskId, updateTask}:{number, ITaksEdit}) => {
        try{
            const response = await editTask(taskId, updateTask)
            return response
        }
        catch(error){
            console.error(error);
            throw error
        }
    }
)