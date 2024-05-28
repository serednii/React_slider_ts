import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ScrollState = {
    progressList: Array<number>
}

const initialState: ScrollState = {
    progressList: [25, 60, 40, 90]
}

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers:{
        addNewComponent(state) {
            state.progressList.push(Math.floor(Math.random() * 100 + 1)); // Use Math.floor to ensure it's an integer
        },
        removeComponent(state, action: PayloadAction<number>){
            state.progressList.splice(action.payload, 1)
        },
        setScroll(state, action: PayloadAction<Array<number>>){
            const [index, progress] = action.payload
            if(progress>100)
                state.progressList[index] = 100
            else if(progress < 0 )
                state.progressList[index] = 0
            else 
                state.progressList[index] = progress
        },
        subScroll(state, action: PayloadAction<number>){
            if(state.progressList[action.payload] >= 10) state.progressList[action.payload] -=  10
        },
        addScroll(state, action: PayloadAction<number>){
            if(state.progressList[action.payload] <= 90) state.progressList[action.payload] += 10
        },
    }
})

export const {setScroll, subScroll, addScroll, addNewComponent, removeComponent} = scrollSlice.actions;
export default scrollSlice.reducer;