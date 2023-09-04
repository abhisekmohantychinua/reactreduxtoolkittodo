import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.text.completed = true
                }
                return todo
            })
        }
    }
})

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer