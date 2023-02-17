import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appointmentService from "../../services/appointmentService";

const initialState = {
    appointments : [],
    appointment : null,
    isLoading : false,
    isSuccess : false,
    isError : false,
    errors : []
}

export const setAppointment = createAsyncThunk(
    'appointment/set',
    async (data, thunk) => {
        try {
            const response = await appointmentService.setAppointment(data)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const getAllAppointment = createAsyncThunk(
    'appointment/getAll',
    async (params, thunk) => {
        try {
            const response = await appointmentService.getAllAppointments(params.agentId)
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const getOneAppointment = createAsyncThunk(
    'appointment/getOne',
    async (params, thunk) => {
        try {
            const response = await appointmentService.getOneAppointment(params)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const alterAppointmentStatus = createAsyncThunk(
    'appointment/alter-status',
    async (data, thunk) => {
        try {
            const { id, statusValue } = data
            const response = await appointmentService.alterAppointmentStatus({ id, statusValue })
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

const appointmentSlice = createSlice({
    name : 'appointment',
    initialState, 
    reducers : {
        resetEssentialProps : (state) => {
            state.isError = false
            state.isSuccess = false
        }
    },
    extraReducers : (builder) => {
        builder.addCase(setAppointment.pending, (state) => {
            state.errors = []
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(setAppointment.fulfilled, (state, action) => {
            state.errors = []
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        }).addCase(setAppointment.rejected, (state, action) => {
            state.errors = action.payload
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        }).addCase(getAllAppointment.pending, (state) => {
            state.appointments = []
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(getAllAppointment.fulfilled, (state, action) => {
            state.appointments = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        }).addCase(getAllAppointment.rejected, (state, action) => {
            state.appointments = []
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        }).addCase(getOneAppointment.pending, (state) => {
            state.appointment = null
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(getOneAppointment.fulfilled, (state, action) => {
            state.appointment = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        }).addCase(getOneAppointment.rejected, (state, action) => {
            state.appointment = null
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        }).addCase(alterAppointmentStatus.pending, (state) => {
            state.errors = []
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(alterAppointmentStatus.fulfilled, (state, action) => {
            
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        }).addCase(alterAppointmentStatus.rejected, (state,action) => {
            state.errors = action.payload
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
    }
})

export const { resetEssentialProps } = appointmentSlice.actions
export default appointmentSlice.reducer;