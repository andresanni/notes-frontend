import PropTypes from 'prop-types';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'Make not important' : 'Make important';

  return (
    <li className="note">
      <p>{note.content}</p>
      <p>
        <strong>Important:</strong> {note.important.toString()}{' '}
      </p>
      <button
        data-testid={`toggle-importance-${note.id}`}
        onClick={toggleImportance}
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
  }),
  toggleImportance: PropTypes.func,
};
export default Note;
