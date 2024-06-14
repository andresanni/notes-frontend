import useField from "../hooks/useField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../actions/userActions";
import useNotification from "../hooks/useNotification";
import { Button, Container, TextField } from "@mui/material";

function LoginForm() {
  const { showNotification } = useNotification();
  const userField = useField("text");
  const passwordField = useField("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      username: userField.value,
      password: passwordField.value,
    };
    dispatch(loginAction(credentials, showNotification));
    userField.reset();
    passwordField.reset();
    navigate("/");
  };

  return (
    <Container maxWidth="md"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '50vh',
      padding:'30px',
      justifyContent:'center'
      
    }}>
    <form onSubmit={handleSubmit} style={{
      display:"flex",
      flexDirection:"column",
      gap:"16px",
      justifyContent:"center"

    }}> 
      <TextField label="Username" {...userField} reset={undefined}  size="small"/>
      <TextField label="Password" {...passwordField} reset={undefined} size="small"/>
      <Button type="submit" variant="contained">
        login
      </Button>
    </form>
    </Container>
  );
}

export default LoginForm;
