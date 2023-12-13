import {createSlice} from "@reduxjs/toolkit"
import { fetchingRegister } from "./service";


const initialState = {
    user:null,
    isLoading:false,
    error: null as string | null | undefined
};

const registerSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchingRegister.pending, (state)=>{
                state.isLoading = true
            })
        builder
            .addCase(fetchingRegister.fulfilled, (state,action) => {
                state.isLoading = false;
                state.user = action.payload
            })
        builder
            .addCase(fetchingRegister.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message 
            })
    }
})

export default registerSlice.reducer