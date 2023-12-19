import { createSlice } from "@reduxjs/toolkit"
import { fetchingUser, patchingUser } from "./service"
import { IUserState } from "../models/interface"

const initialState:IUserState = { 
    users:[],
    isLoading:false,
    error: undefined
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchingUser.pending, (state)=> {
            state.isLoading = true
        })
        builder.addCase(fetchingUser.fulfilled, (state,action)=> {
            state.isLoading = false
            state.users =Object.values(action.payload)            
        })
        builder.addCase(fetchingUser.rejected, (state,action)=> {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(patchingUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(patchingUser.fulfilled, (state) => {
            state.isLoading = false;
        })
        builder.addCase(patchingUser.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default userSlice.reducer