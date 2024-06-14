import noteService from "../services/notes";
import { setNotes, updateNote, appendNote } from "../reducers/notesReducer";

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export const toggleImportanceOf = (id) => {
  return async (dispatch, getState) => {
    const note = getState().notes.find((note) => note.id === id);
    if (note) {
      const changedNote = { ...note, important: !note.important };
      const updatedNote = await noteService.update(id, changedNote);
      dispatch(updateNote(updatedNote));
    }
  };
};

export const createNote = (newNote, showNotification) => {
  return async (dispatch) => {
    const addedNote = await noteService.create(newNote);
    dispatch(appendNote(addedNote));
    showNotification("Note created", "success");
  };
};
