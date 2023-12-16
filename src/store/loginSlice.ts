import { createSlice } from '@reduxjs/toolkit'
import { fetchingLogin } from './service'
import { ILoginData } from '../models/interface'

interface ILoginSate {
    user: null | ILoginData,
    checkUser: boolean,
    isLoading: boolean,
    error: string | null 
}


const initialState:ILoginSate = {
    user:null,
    checkUser:false,
    isLoading:false,
    error:null 
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchingLogin.pending, (state)=>{
            state.isLoading = false;
        })
    }
})