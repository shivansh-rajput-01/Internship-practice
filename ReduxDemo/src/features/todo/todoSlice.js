import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todo: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todo.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todo.map((todo) => {
                if(todo.id === action.payload){
                    todo.isDone = true;
                } 
            });
        }
    }
});

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;
