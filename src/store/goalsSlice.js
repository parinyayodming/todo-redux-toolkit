import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    lastID: 0,
    goalList: [],
  },
  reducers: {
    addGoal: (state, action) => {
      state.lastID++;
      state.goalList.push({
        id: state.lastID,
        name: action.payload.name,
        isDone: false,
      });
    },
    checkGoal: (state, action) => {
      const goal = state.goalList.find((g) => g.id == action.payload.id);
      if (goal) {
        goal.isDone = !goal.isDone;
      }
    },
  },
});

export const { addGoal, checkGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
