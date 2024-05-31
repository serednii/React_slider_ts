import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
const urlMockAPI = 'https://6606a11ebe53febb857e51e7.mockapi.io/scrolbar';

export type ProgressItems  = {
    id: number;
    value: number;
}

export type ScrollState = {
    progressList: Array<ProgressItems>;
    status: null|string;
    error: any;
}


type InputFetchChangeScroll = {
    index: number;
    value: number|string;
}

const initialState: ScrollState = {
    progressList: [],
    status: null,
    error: null
}

export const fetchScrollBar = createAsyncThunk(
    'scroll/fetchScrollBar',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch(urlMockAPI)
            if(!response.ok){
                throw new Error('Server Error')
            }
            const data = await response.json()
            return data;

        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
)

export const fetchDeleteScroll = createAsyncThunk(
    'scroll/fetchDeleteScroll',
    async function(id: number, { rejectWithValue }) {
        try {
            const response = await fetch(`${urlMockAPI}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error');
            }
            return id;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const fetchAddScroll = createAsyncThunk(
    'scroll/fetchAddScroll',
    async function(_, { rejectWithValue }) {

        try {
            const response = await fetch(urlMockAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({value: Math.floor(Math.random() * 100 + 1)})
            });
            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error');
            }
            const data= await response.json();
            return data
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const fetchChangeScroll = createAsyncThunk(
    'scroll/fetchChangeScroll',
    async function({index, value}: InputFetchChangeScroll, { rejectWithValue, dispatch, getState }) {
        const state = getState() as {scroll: ScrollState}
        const id = state.scroll.progressList[index].id;
        let newValue = state.scroll.progressList[index].value;

        if (typeof value === 'string') {
            if (value === 'plus' && newValue <= 90) {
                newValue += 10;
            } else if (value === 'minus' && newValue >= 10) {
                newValue -= 10;
            }
        } else {
            if (value > 100) {
                newValue = 100;
            } else if (value < 0) {
                newValue = 0;
            } else {
                newValue = value;
            }
        }
        try {
            const response = await fetch(`${urlMockAPI}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({value: newValue})
            });
            if (!response.ok) {
                throw new Error('Can\'t change task. Server error');
            }
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
)

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers:{
        addNewComponent(state) {
            state.progressList.push(
                {
                id: state.progressList.length, 
                value: Math.floor(Math.random() * 100 + 1)
                }
                ); // Use Math.floor to ensure it's an integer
        },
        setScroll(state, action: PayloadAction<Array<number>>){
            const [index, progress] = action.payload
            if(progress>100)
                state.progressList[index].value = 100
            else if(progress < 0 )
                state.progressList[index].value = 0
            else 
                state.progressList[index].value = progress
        },
        subScroll(state, action: PayloadAction<number>){
            if(state.progressList[action.payload].value >= 10) state.progressList[action.payload].value -=  10
        },
        addScroll(state, action: PayloadAction<number>){

            if(state.progressList[action.payload].value <= 90) state.progressList[action.payload].value += 10
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScrollBar.pending,(state)=>{
        })
        .addCase(fetchScrollBar.fulfilled, (state, action: PayloadAction<Array<ProgressItems>>)=> {
            state.progressList = action.payload;
            state.status = 'loading';
            state.status = 'resolved';
        })
        .addCase(fetchScrollBar.rejected, (state, action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        })
        .addCase(fetchDeleteScroll.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDeleteScroll.fulfilled, (state, action: PayloadAction<number>) => {
            state.progressList = state.progressList.filter(item => item.id !== action.payload);
            state.status = 'resolved';
        })
        .addCase(fetchDeleteScroll.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
        .addCase(fetchAddScroll.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAddScroll.fulfilled, (state, action: PayloadAction<ProgressItems>) => {
            state.progressList.push( action.payload);
            state.status = 'resolved';
        })
        .addCase(fetchAddScroll.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        })
        .addCase(fetchChangeScroll.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchChangeScroll.fulfilled, (state, action: PayloadAction<{ id: number, value: number }>) => {
            const index = state.progressList.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.progressList[index].value = action.payload.value;
            }
            state.status = 'resolved';
        })
        .addCase(fetchChangeScroll.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });
    }
})

export const {setScroll, subScroll, addScroll, addNewComponent} = scrollSlice.actions;
export default scrollSlice.reducer;