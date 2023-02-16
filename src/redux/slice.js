import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    taskList: [
      { id: Math.random(), task: "Learn HTML", isDone: true },
      { id: Math.random(), task: "Learn CSS", isDone: true },
      { id: Math.random(), task: "Learn Redux", isDone: false },
    ],
    filter: false,
  },
};

export const todoSlicereducer = createSlice({
  name: "todosData",
  initialState,
  reducers: {
    Delete: (state, { payload }) => {
      state.value.taskList = state.value.taskList.filter(
        (el) => el.id !== payload
      );
    },
    Complete: (state, { payload }) => {
      state.value.taskList = state.value.taskList.map((elt) =>
        elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
      );
    },
    Add: (state, { payload }) => {
      state.value.taskList = [...state.value.taskList, payload];
    },
    Filter: (state) => {
      state.value.filter = !state.value.filter;
    },
    editTodo: (state, { payload }) => {
      state.value.taskList = state.value.taskList.map((el) =>
        el.id === payload.id ? payload : el
      );
    },
  },
});
export const { Delete, Complete, Add, Filter, editTodo } =
  todoSlicereducer.actions;
export default todoSlicereducer.reducer;
