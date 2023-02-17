import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileService from '../../services/profileService'

const initialState = {
    isSuccess : true,
    isLoading : false,
    errors : [],
    data : null,
    agents : [],
    profileData : null
}

export const createAgent = createAsyncThunk(
    'profile/create/agent', 
    async (agentData , thunk) => {
        try{
            const response = await profileService.createNewAgent(agentData)
            return response.data;
        }catch(error){
            return thunk.rejectWithValue(error.response.data)
        }
    })

export const getAgents = createAsyncThunk(
    'profile/get-all/agent',
    async (params, thunk) => {
        try {
            const response = await profileService.getAllAgents()
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response);
        }
    }
)

export const getProfile = createAsyncThunk(
    'profile',
    async (params, thunk) => {
        try {
            const response = await profileService.getProfile(params['type'])
            return response.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response);
        }
    }
)

const profileSlice = createSlice({
    name : 'profile',
    initialState, 
    reducers : {
        reset : (state, action) => {
            state.isSuccess = true
            state.errors = []
            state.isLoading = false
            state.data = null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(createAgent.pending, (state) => {
            state.errors = []
            state.isLoading = true;
            state.isSuccess = false
            state.data = null
        }).addCase(createAgent.fulfilled, (state, actions) => {
            state.data = actions.payload
            state.errors = []
            state.isLoading = false
            state.isSuccess = true
        }).addCase(createAgent.rejected, (state, action) => {
            state.data = null
            state.errors = action.payload
            state.isLoading = false
            state.isSuccess = false
            // console.log(action.payload)
            // console.log('Error state')
            // console.log(state.errors)
        }).addCase(getAgents.pending, (state) => {
            state.errors = []
            state.isLoading = true
            state.isSuccess = false
            state.data = null
            state.agents = []
        }).addCase(getAgents.fulfilled, (state, action) => {
            state.errors = []
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
            state.agents = action.payload
            // console.log(state.data)
        }).addCase(getAgents.rejected, (state, action) => {
            state.errors = action.payload ? action.payload : [...action.error]
            state.isLoading = false
            state.isSuccess = false
            state.data = null
            state.agents = []
        }).addCase(getProfile.pending, (state) => {
            state.errors = []
            state.isLoading = true
            state.isSuccess = false
            state.profileData = null;
        }).addCase(getProfile.fulfilled, (state, action) => {
            state.errors = []
            state.isLoading = false
            state.isSuccess = true
            state.data = action.payload
            state.agents = action.payload
            state.profileData = action.payload
            // console.log(state.data)
        }).addCase(getProfile.rejected, (state, action) => {
            state.errors = action.payload ? action.payload : [...action.error]
            state.isLoading = false
            state.isSuccess = false
        })
    }
})

export default profileSlice.reducer;
export const { reset } = profileSlice.actions