import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import propertyService from "../../services/propertyService";
const initialState = {
    isLoading : false,
    errors : [],
    data : null,
    isSuccess : false,
    properties : [],
    property : null,
    showSnackbar : false
}
export const getAllProperties = createAsyncThunk(
    'property/getAll',
    async (params, thunk) => {
        try {
            const response = await propertyService.getAllProperties()
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const getOneProperty = createAsyncThunk(
    'property/getOne',
    async (params, thunk) => {
        try {
            const response = await propertyService.getOneProperty(params)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const createProperty = createAsyncThunk(
    'property/create',
    async (formData, thunk) => {
        try {
            const response = await propertyService.createProperty(formData)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const updatePropertyDetails = createAsyncThunk(
    'property/update-details',
    async (body, thunk) => {
        try {
            const { id, data } = body
            const response = await propertyService.updatePropertyDetails(id, data)
            return response.data
        } catch (error) {
            return thunk.rejectWithValue(error.response.data)
        }
    }
)

export const updatePropertyImage = createAsyncThunk(
    'property/update-image',
    async (formData, thunk) => {
        try {
            const response = await propertyService.updatePropertyImage(formData)
            return response.data
        } catch (error) {
            console.log(error)
            return thunk.rejectWithValue(error.response.data)
        }
    }
)
const propertySlice = createSlice({
    name : 'property',
    initialState,
    reducers : {
        reset : (state) => {
            state.isLoading = false
            state.errors = []
            state.data = null
            state.isSuccess = false
            state.showSnackbar = false
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAllProperties.pending, (state) => {
            state.properties = []
            state.isLoading = true
            state.errors = []
            state.isSuccess = false
        }).addCase(getAllProperties.fulfilled, (state, action) => {
            state.properties = action.payload
            state.isLoading = false
            state.errors = []
            state.isSuccess = true
        }).addCase(getAllProperties.rejected, (state, action) => {
            state.properties = []
            state.isLoading = false
            state.errors = []
            state.isSuccess = false
        }).addCase(createProperty.pending, (state) => {
            state.isLoading = true
            state.errors = []
            state.isSuccess = false
        }).addCase(createProperty.fulfilled, (state, action) => {
            state.isLoading = false
            state.errors = []
            state.isSuccess = true
        }).addCase(createProperty.rejected, (state, action) => {
            // state.properties = action.payload
            state.isLoading = false
            state.errors = action.payload
            state.isSuccess = false
        }).addCase(getOneProperty.pending, (state) => {
            state.property = null
            state.isLoading = true
            state.errors = []
            state.isSuccess = false
        }).addCase(getOneProperty.fulfilled, (state, action) => {
            state.property = action.payload
            state.isLoading = false
            state.errors = []
            state.isSuccess = true
        }).addCase(getOneProperty.rejected, (state, action) => {
            state.property = null
            state.isLoading = false
            state.errors = []
            state.isSuccess = false
        }).addCase(updatePropertyDetails.pending, (state) => {
            state.isLoading = true
            state.errors = []
            state.isSuccess = false
            state.showSnackbar = false
        }).addCase(updatePropertyDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.errors = []
            state.isSuccess = true
            state.showSnackbar = true
        }).addCase(updatePropertyDetails.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
            state.isSuccess = false
            state.showSnackbar = true
        }).addCase(updatePropertyImage.pending, (state) => {
            state.isLoading = true
            state.errors = []
            state.isSuccess = false
            state.showSnackbar = false
        }).addCase(updatePropertyImage.fulfilled, (state, action) => {
            state.isLoading = false
            state.errors = []
            state.isSuccess = true
            state.showSnackbar = true
        }).addCase(updatePropertyImage.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
            state.isSuccess = false
            state.showSnackbar = true
        })
    }
})

export const { reset } = propertySlice.actions
export default propertySlice.reducer