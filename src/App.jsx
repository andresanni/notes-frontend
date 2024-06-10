import { useState, useEffect, useRef } from "react";
import noteService from "./services/notes";
import loginService from "./services/login";
import NewNoteForm from "./components/NewNoteForm";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    noteService.getAll().then((notesList) => {
      setNotes(notesList);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (credentials) => {
    const { username, password } = credentials;

    try {
      const user = await loginService.login({ username, password });

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));

      noteService.setToken(user.token);
      setUser(user);
      navigate("/");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedNoteappUser");
    setUser(null);
    noteService.setToken(null);
    navigate("/");
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((updatedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)));
      })
      .catch((error) => {
        setErrorMessage(`The note with id ${id} doesn´t exist in server`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
        console.log(error);
      });
  };

  const handleAddNote = (newNote) => {
    noteService.create(newNote).then((addedNote) => {
      setNotes(notes.concat(addedNote));
      navigate("/notes");
    });
  };


  return (
    <div className="App">
      <NavBar loggedUser={user} handleLogout={handleLogout} />
      <Notification message={errorMessage} />

      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/login" element={<LoginForm onSubmit={handleLogin} />} />
        <Route
          path="/notes"
          element={
            <NotesList notes={notes} toggleImportanceOf={toggleImportanceOf} />
          }
        />
        <Route
          path="/create"
          element={<NewNoteForm onSubmit={handleAddNote} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
