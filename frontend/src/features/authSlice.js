import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    name:null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        updateUserIsLoggedIn : (state, action) => {
            state.isLoggedIn = action.payload;
        },
    }
})

export const {updateUserIsLoggedIn} = authSlice.actions;
export default authSlice.reducer;