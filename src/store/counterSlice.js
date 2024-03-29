import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        incCounter(state, action) {
            state.count++;
        },
        decCounter(state, action) {
            if (state.count > 0) state.count--
        },
        resetCounter(state, action) {
            state.count = 0;
        },
    },

});

export const { incCounter, decCounter, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;