import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/userActions";
import useNotification from "../hooks/useNotification";
import { AppBar, Toolbar } from "@mui/material";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const {showNotification} = useNotification();

  const handleLogout = () => {
    dispatch(logoutAction(showNotification));
    navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{borderRadius:"5px"}}>
    <Toolbar>
      <h1>Notes app</h1>
      <ul>
        {user.username ? (
          <li>
            <Link to="/create">Create</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      {user.username && (
        <div>
          {user.username} logged in
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </Toolbar>
    </AppBar>
    
    
  );
};

export default NavBar;
