import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import notificationService from "../../services/notificationService";

const initialState = {
    isSuccess : false,
    isError : false,
    notifications : [],
    notificationCount : 0
}

export const getAllNotifications = createAsyncThunk(
    'notification/getAll',
    async (params, thunk) => {
        try {
            const response = await notificationService.getAll(params.userId)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)
const notificationSlice = createSlice({
    name : 'notification',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getAllNotifications.pending, (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.notifications = []
            state.notificationCount = 0
        }).addCase(getAllNotifications.fulfilled, (state, action) => {
            state.isError = false;
            state.isSuccess = true;
            state.notifications = action.payload
            state.notificationCount = 0
        }).addCase(getAllNotifications.rejected, (state) => {
            state.isError = true;
            state.isSuccess = false;
            state.notifications = []
            state.notificationCount = state.notifications
                .filter(n => n.status === 0)
                .length;
        })
    }
})

export default notificationSlice.reducer;