import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = {email: action.payload.email};
        },
        signup: (state, action) => {
            state.user = {email: action.payload.email};
        },
    },
});

export const {login, signup} = authSlice.actions;

export default authSlice.reducer;