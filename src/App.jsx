import {  useEffect } from "react";
import NewNoteForm from "./components/NewNoteForm";
import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import MuiNavbar from "./components/MuiNavbar"; 
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeNotes } from "./actions/noteActions";
import { checkLogged } from "./actions/userActions";
import { Container } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
    dispatch(checkLogged());
  }, [dispatch]);

  return (
    <Container sx={{maxWidth: '1600px !important'}}>
      
      <MuiNavbar />
      <Notification/>

      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/create" element={<NewNoteForm />} />
      </Routes>
      
      <Footer />
    </Container>
  );
}

export default App;
