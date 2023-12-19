import { createSlice } from '@reduxjs/toolkit'
import { fetchingLogin } from './service'
import { ILoginState } from '../models/interface';



const initialState:ILoginState = {
    isLoggedIn:false,
    isLoading:false,
    error:undefined 
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        userIsLoggedIn: (state)=>{
            state.isLoggedIn = true;
        },
        userIsLoggedOut: (state)=>{
            state.isLoggedIn = false;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchingLogin.pending, (state)=>{
            state.isLoading = false;
            state.error = undefined
        })
        builder.addCase(fetchingLogin.fulfilled, (state) => {
            state.isLoading = false;
            state.error = undefined;
            state.isLoggedIn = true;
        })
        builder.addCase(fetchingLogin.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export const { userIsLoggedIn, userIsLoggedOut} = loginSlice.actions
export default loginSlice.reducer
