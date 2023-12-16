import { ILoginData, IRegiterData } from "../models/interface";
import { instance } from "../services/ApiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchingOneTask, loginUser, userTask, deleteTask as deleteTaskService } from "../services/CRUDFunctions";


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
    async (_, {rejectWithValue}) => {
        try{
            const { data } = await userTask();
            return data
        }
        catch(error){
            return rejectWithValue(error)    
        }
    }
)

export const deleteTasks = createAsyncThunk(
    'tasks/delete',
    async (tasksId:number) => {
        await deleteTaskService(tasksId);
        return tasksId
    }
)

export const fetchOneTask = createAsyncThunk(
    'tasks/oneTask',
    async (taskId:number) => {
        const {data} = await fetchingOneTask(taskId)
        return data;
    }
)