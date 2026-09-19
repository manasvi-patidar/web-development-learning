//reducers of todoList

import { createSlice, nanoid } from "@reduxjs/toolkit";

//define initialState
const initialState = {
  todos: [
    { id: nanoid(), task: "Water the plants", isDone: false },
    { id: nanoid(), task: "Pay electricity bill", isDone: false },
    { id: nanoid(), task: "Attend team meeting", isDone: false },
    { id: nanoid(), task: "Read React docs", isDone: false },
    { id: nanoid(), task: "Buy groceries", isDone: false },
    { id: nanoid(), task: "Watch Git tutorial", isDone: false },
    { id: nanoid(), task: "Call the plumber", isDone: false },
    { id: nanoid(), task: "Go for a walk", isDone: false },
    { id: nanoid(), task: "Clean the room", isDone: false },
    { id: nanoid(), task: "Reply to emails", isDone: false },
    { id: nanoid(), task: "Practice coding", isDone: false },
  ],
};

//define Slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  //define reducer functions
  reducers: {
    //state, action
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation -> possible due to redux toolkit
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
