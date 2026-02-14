import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todo: [{id: "abc", task: "demo-task", isDone: false}],
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
        },
        unMarkAsDone: (state, action) => {
            state.todo.map((todo) => {
                if(todo.id === action.payload){
                    todo.isDone = false;
                } 
            });
        }
    }
});

export const {addTodo, deleteTodo, markAsDone, unMarkAsDone} = todoSlice.actions;
export default todoSlice.reducer;
