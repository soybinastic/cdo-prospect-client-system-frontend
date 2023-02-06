import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";


const initialState = {
    isLoading : false,
    errors : [],
    isSuccess : true,
    data : null
};

export const signIn = createAsyncThunk(
    'auth/signin', 
    async (userCredential, thunk) => {
        try {
            const response = await authService.signIn(userCredential);
            return response.data;
        } catch (error) {
            // console.log(error)
            // const message = (error.response 
            //     && error.response.data 
            //     && error.response.data.message
            //     ) || error.message || error.toString()
            
            return thunk.rejectWithValue(error.response.data);
            // return error.response.data
        }
    })

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.isLoading = true
                state.isSuccess = true
                state.errors = []
                state.data = null
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true;
                state.data = action.payload
                // console.log(action.payload)
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.errors = action.payload.errors
                // console.log(action.payload.errors)
            })
    }
});

export default authSlice.reducer;