import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    setNotes(state, action) {
      return action.payload;
    },
    updateNote(state, action) {
      const noteToUpdate = action.payload;
      return state.map((note) =>
        note.id === noteToUpdate.id ? noteToUpdate : note
      );
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setNotes, updateNote, appendNote } = noteSlice.actions;
export default noteSlice.reducer;
