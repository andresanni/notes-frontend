import Note from './Note';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const NotesList = () => {
  
  const [showAll, setShowAll] = useState(true);
  let notes = useSelector((state)=>state.notes)
  
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
