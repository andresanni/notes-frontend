import { useState } from 'react';
import PropTypes from 'prop-types';

function NewNoteForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      content: inputValue,
      important: isImportant,
    };
    onSubmit(newNote);
    setInputValue('');
    setIsImportant(false);
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

NewNoteForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default NewNoteForm;
