import { createSlice } from "@reduxjs/toolkit";


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
            console.log(action.payload.text)
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            });
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
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;