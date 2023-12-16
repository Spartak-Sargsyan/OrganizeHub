import { createSlice} from "@reduxjs/toolkit"
import { deleteTasks, fetchOneTask, fetchingTasks as fetchingTasksAction } from "./service";
import { ITaskState } from "../models/interface";


const initialState: ITaskState = {
    tasks:[],
    isLoading:false,
    error: undefined,
    selectedTask:null
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
        builder.addCase(deleteTasks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteTasks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        })
        builder.addCase(deleteTasks.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error.message
        }),
        builder.addCase(fetchOneTask.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(fetchOneTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.selectedTask = action.payload;
          });
          builder.addCase(fetchOneTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
    }
})

export default tasksSlice.reducer