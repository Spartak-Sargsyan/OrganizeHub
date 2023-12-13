import { IRegiterData } from "../models/interface";
import { instance } from "../services/ApiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userTask } from "../services/CRUDFunctions";


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

export const fetchingTasks = createAsyncThunk(
    'user/tasks',
    async (_, {rejectWithValue}) => {
        try{
            const response = await userTask();
            return response
        }
        catch(error){
            return rejectWithValue(error)    
        }
    }
)