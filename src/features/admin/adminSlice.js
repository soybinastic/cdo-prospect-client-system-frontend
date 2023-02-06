import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    sideNavShow : false
}

const adminSlice = createSlice({
    name : 'admin', 
    initialState,
    reducers : {
        sideNavToggle : (state, action) => {
            state.sideNavShow = !state.sideNavShow
        }
    }
})

export const { sideNavToggle } = adminSlice.actions;

export default adminSlice.reducer;