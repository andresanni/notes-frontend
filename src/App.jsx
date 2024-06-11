import { useState, useEffect } from "react";
import NewNoteForm from "./components/NewNoteForm";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeNotes } from "./actions/noteActions";
import { checkLogged } from "./actions/userActions";

function App() {
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
    dispatch(checkLogged());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Notification message={errorMessage} />

      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/create" element={<NewNoteForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
