import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import evaluationService from "../../services/evaluationService";

const initialState = {
    evaluations : [],
    evaluation : null,
    isError : false,
    isSuccess : false,
    isLoading : false
}

export const getAllEvaluations = createAsyncThunk(
    'evaluation/getAll',
    async (params, thunk) => {
        try {
            const response = await evaluationService.getAllEvaluations()
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const getOneEvaluation = createAsyncThunk(
    'evaluation/getOne',
    async (params, thunk) => {
        try {
            const response = await evaluationService.getOneEvaluation(params)
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const evaluate = createAsyncThunk(
    'evaluation/evaluate',
    async (params, thunk) => {
        try {
            const response = await evaluationService.evaluate({ evaluationId : params.evaluationId, status : params.statusValue })
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)
const evaluationSlice = createSlice({
    name : 'evaluation',
    initialState,
    reducers : {
        updateStatus : (state, action) => {
            state.evaluation.status = action.payload.statusValue
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAllEvaluations.pending, (state) => {
            state.evaluations = []
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
        }).addCase(getAllEvaluations.fulfilled, (state, action) => {
            state.evaluations = action.payload
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
        }).addCase(getAllEvaluations.rejected, (state, action) => {
            state.evaluations = []
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
        }).addCase(getOneEvaluation.pending, (state) => {
            state.evaluation = null
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
        }).addCase(getOneEvaluation.fulfilled, (state, action) => {
            state.evaluation = action.payload
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
        }).addCase(getOneEvaluation.rejected, (state, action) => {
            state.evaluation = null
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
        }).addCase(evaluate.pending, (state) => {
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
        }).addCase(evaluate.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
        }).addCase(evaluate.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
        })
    }
})

export const { updateStatus } = evaluationSlice.actions;
export default evaluationSlice.reducer;