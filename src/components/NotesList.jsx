import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell
} from "@mui/material";
import Note from "./Note";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const NotesList = () => {
  const [showAll, setShowAll] = useState(true);
  let notes = useSelector((state) => state.notes);

  if (!showAll) {
    notes = notes.filter((note) => (note.important ? note : null));
  }

  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Improtant" : "Show All"}</button>      

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {notes.map((note) => {
              return (
                <TableRow key={note.id}>
                  <TableCell>
                    <Note note={note} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
  toggleImportanceOf: PropTypes.func,
  showAll: PropTypes.bool,
};
export default NotesList;
