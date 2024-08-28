import { createSlice, nanoid } from "@reduxjs/toolkit";

export let initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let addTodo = {
        id: nanoid(),
        task: action.payload.task,
        date: action.payload.date,
        priority: action.payload.priority,
        isDone: false,
      };

      if (!addTodo.task || !addTodo.date) {
        return console.log("Please enter both task and date");
      }
      state.todo.push(addTodo);
    },

    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },

    // Toggle the isDone state
    markAsDone: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone }; // Toggle the isDone state
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
