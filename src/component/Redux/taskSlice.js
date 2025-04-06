import { createSlice } from '@reduxjs/toolkit';

let idCounter = new Date();



const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state , action) => {
      state.push({ id: idCounter, ...action.payload });
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
