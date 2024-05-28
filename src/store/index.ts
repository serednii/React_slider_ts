import { configureStore } from "@reduxjs/toolkit";
 import scrollReducer from './scrollSlice';

 const store = configureStore({
    reducer: {
        scroll: scrollReducer,
    }
 })

 export default store;

 export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

