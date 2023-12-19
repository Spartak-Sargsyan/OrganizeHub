import {createSlice} from "@reduxjs/toolkit"
import { fetchingRegister } from "./service";


const initialState = {
    isLoading:false,
    error: undefined
};

const registerSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchingRegister.pending, (state)=>{
                state.isLoading = true
                state.error = undefined
            })
        builder
            .addCase(fetchingRegister.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined
            })
        builder
            .addCase(fetchingRegister.rejected, (state,action) => {
                state.isLoading = false;
                state.error = state.error && action.error.message
            })
    }
})

export default registerSlice.reducer