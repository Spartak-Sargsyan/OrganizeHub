import { createSlice} from "@reduxjs/toolkit"
import { fetchingTasks as fetchingTasksAction } from "./service";
import { ITask } from "../models/interface";

interface ITaskState  {
    tasks:ITask[],
    isLoading:boolean;
    error:string|null;
}


const initialState: ITaskState = {
    tasks:[],
    isLoading:false,
    error: null 
};

const tasksSlice = createSlice({
    name:'task',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchingTasksAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchingTasksAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tasks = action.payload; 
        })
        builder.addCase(fetchingTasksAction.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export default tasksSlice.reducer