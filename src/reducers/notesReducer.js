import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

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

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

//TODO: MODIFICAR PROMESAS POR ASYNC AWAIT
export const toggleImportanceOf = (id) => {
  return async (dispatch, getState) => {
    const note = getState().notes.find((note) => note.id === id);
    if (note) {
      const changedNote = { ...note, important: !note.important };
      noteService.update(id, changedNote).then((updatedNote) => {
        dispatch(updateNote(updatedNote));
      });
    }
  };
};

//TODO: MODIFICAR PROMESAS POR ASYNC AWAIT
export const createNote = (newNote) => {
  return async (dispatch) => {
    noteService.create(newNote).then((addedNote) => {
      dispatch(appendNote(addedNote));
    });
  };
};

export default noteSlice.reducer;
