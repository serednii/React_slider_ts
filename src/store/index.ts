
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
 import scrollReducer from './scrollSlice';

 const store = configureStore({
    reducer: {
        scroll: scrollReducer,
    }
 })

 export default store;

 export type AppDispatch = typeof store.dispatch;
 export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

