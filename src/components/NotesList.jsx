import Note from './Note';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NotesList = ({ notes, toggleImportanceOf}) => {
  
  const [showAll, setShowAll] = useState(true);
  
  if (!showAll) {
    notes = notes.filter((note) => (note.important ? note : null));
  }

  return (
    <div>
      <button onClick={()=>setShowAll(!showAll)}>All</button>
      <button onClick ={()=>setShowAll(!showAll)}>Only Important</button>
    <ul>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        );
      })}
    </ul>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
  toggleImportanceOf: PropTypes.func,
  showAll: PropTypes.bool,
};
export default NotesList;
