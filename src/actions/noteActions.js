import noteService from "../services/notes";
import { setNotes, updateNote, appendNote } from "../reducers/notesReducer";

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
export const createNote = (newNote, showNotification) => {
  return async (dispatch) => {
    noteService.create(newNote).then((addedNote) => {
      dispatch(appendNote(addedNote));
      showNotification("Note created", "success")
    });
  };
};
