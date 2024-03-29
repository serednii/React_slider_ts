import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const urlMockup = 'https://6606a11ebe53febb857e51e7.mockapi.io/todos';
const urlJsonPlaceHolder = 'https://jsonplaceholder.typicode.com/todos';
const url = urlMockup;


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json();
            console.log(data.length)
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, { rejectWithValue, dispatch }) {
        console.log(id)
        try {
            const response = await fetch(`${url}/${id}`, {
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,DELETE"
                },
                method: 'DELETE',
            })
            // if (!response.ok) {
            //     throw new Error('Cant\'t delete task. Server error');
            // }
            dispatch(removeTodo({ id }))
            const data = await response.json()
            console.log(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, { rejectWithValue, dispatch, getState }) {
        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch(`${url}/${id}`, {
                mode: 'no-cors',
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            })

            if (!response.ok) {
                throw new Error('Cant\t toggle status. Server error')
            }
            dispatch(toggleComplete({ id }))
            const data = await response.json()
            console.log(data)

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, { rejectWithValue, dispatch }) {
        try {
            const newTodo = {
                userId: 1,
                title: text,
                completed: false
            }
            const response = await fetch(url, {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo)
            })

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error')
            }
            const data = await response.json();
            console.log(data)
            dispatch(addTodo(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        counter: 0,
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            console.log(action.payload)
            state.todos.push(action.payload);
            state.counter++;
        },
        toggleComplete(state, action) {
            console.log(action)
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggleTodo.completed = !toggleTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            state.counter--;
        },
    },
    extraReducers: (builder) => {
        builder.
            addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
                console.log('loading')

            }).
            addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.todos = action.payload;
                console.log('resolved')
            }).
            addCase(fetchTodos.rejected, setError).
            addCase(deleteTodo.rejected, setError).
            addCase(toggleStatus.rejected, setError)

    }
});

const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;