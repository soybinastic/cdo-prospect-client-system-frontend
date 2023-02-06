import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requirementService from "../../services/requirementService";

const initialState = {
    isSuccess : false,
    data : null,
    requirements : [],
    requirement : null,
    errors : [],
    isLoading : false,
    isError : false,
}
export const submitRequirements = createAsyncThunk(
    'requirements/submit',
    async (requirementsData, thunk) => {
        try {
            const response = await requirementService.submit(requirementsData);
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const getAllRequirements = createAsyncThunk(
    'requirements/getAll',
    async (params, thunk) => {
        try {
            const response = await requirementService.getAll(params['agentId'])
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const getOneRequirement = createAsyncThunk(
    'requirement/getOne',
    async (params, thunk) => {
        try {
            const response = await requirementService.getOne(params)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)
const requirementSlice = createSlice({
    name : 'requirement',
    initialState,
    reducers : {
        resetEssentialProp : (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
        },
        updateStatus : (state, action) => {
            if(action.payload.isInList){
                const index = state.requirements.findIndex(r => r.id === action.payload.requirementId)
                state.requirements[index].status = action.payload.status;
            }else{
                state.requirement.status = action.payload.status
            }
            
        }
    },
    extraReducers : (builder) => {
        builder.addCase(submitRequirements.pending, (state) => {
            state.data = null
            state.errors = []
            state.isError = false
            state.isSuccess = false
            state.requirements = []
            state.isLoading = true
        }).addCase(submitRequirements.fulfilled, (state, action) => {
            state.data = action.payload
            state.errors = []
            state.isError = false
            state.isSuccess = true
            state.requirements = []
            state.isLoading = false
            console.log(state.data)
        }).addCase(submitRequirements.rejected, (state, action) => {
            state.data = action.payload
            state.errors = action.payload
            state.isError = true
            state.isSuccess = false
            state.requirements = []
            state.isLoading = false
            console.log(state.data)
        }).addCase(getAllRequirements.pending, (state) => {
            state.data = null
            state.errors = []
            state.isError = false
            state.isSuccess = true
            state.requirements = []
            state.isLoading = true
        }).addCase(getAllRequirements.fulfilled, (state, action) => {
            state.data = action.payload
            state.errors = []
            state.isError = false
            state.isSuccess = true
            state.requirements = action.payload
            state.isLoading = false
        }).addCase(getAllRequirements.rejected, (state, action) => {
            state.data = action.payload
            state.errors = action.payload
            state.isError = true
            state.isSuccess = false
            state.requirements = []
            state.isLoading = false
        }).addCase(getOneRequirement.pending, (state) => {
            state.data = null
            state.errors = []
            state.isError = false
            state.isSuccess = true
            state.requirement = null
            state.isLoading = true
        }).addCase(getOneRequirement.fulfilled, (state, action) => {
            state.data = action.payload
            state.errors = []
            state.isError = false
            state.isSuccess = true
            state.requirement = action.payload
            state.isLoading = false
        }).addCase(getOneRequirement.rejected, (state, action) => {
            state.data = action.payload
            state.errors = action.payload
            state.isError = true
            state.isSuccess = false
            state.requirement = null
            state.isLoading = false
        })
    }
})
export const { resetEssentialProp, updateStatus } = requirementSlice.actions;
export default requirementSlice.reducer