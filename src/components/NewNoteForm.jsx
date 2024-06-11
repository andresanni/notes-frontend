import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../actions/noteActions';
import { useNavigate } from 'react-router-dom';

function NewNoteForm() {
  const [inputValue, setInputValue] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      content: inputValue,
      important: isImportant,
    };
    dispatch(createNote(newNote));
    setInputValue('');
    setIsImportant(false);
    navigate("/notes")
  };

  return (
    <form onSubmit={handleSubmit} className="newNoteForm">
      <input
        data-testid="note"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        placeholder="write note content here"
      />
      <input
        data-testid="important"
        type="checkbox"
        id="important"
        name="important"
        checked={isImportant}
        onChange={(event) => {
          setIsImportant(event.target.checked);
        }}
      />
      <label htmlFor="important"> Important</label>
      <br></br>
      <button type="submit">Add</button>
    </form>
  );
}


export default NewNoteForm;
