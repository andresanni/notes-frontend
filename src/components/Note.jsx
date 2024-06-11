import PropTypes from 'prop-types';
import { toggleImportanceOf } from '../actions/noteActions';
import { useDispatch } from 'react-redux';

const Note = ({ note }) => {

  const label = note.important ? 'Make not important' : 'Make important';
  const dispatch = useDispatch();

  return (
    <li className="note">
      <p>{note.content}</p>
      <p>
        <strong>Important:</strong> {note.important.toString()}{' '}
      </p>
      <p>Author: {note.user.username}</p>
      <button
        data-testid={`toggle-importance-${note.id}`}
        onClick={()=>dispatch(toggleImportanceOf(note.id))}
      >
        {label}
      </button>
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    content: PropTypes.string,
    important: PropTypes.bool,
    user: PropTypes.shape({
      username: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
    id: PropTypes.string,
  })
};
export default Note;
