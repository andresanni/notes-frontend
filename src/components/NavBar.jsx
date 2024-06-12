import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/userActions";
import { NotificationContext } from "../context/NotificationContext";
import { useContext } from "react";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const {showNotification} = useContext(NotificationContext);

  const handleLogout = () => {
    dispatch(logoutAction(showNotification));
    navigate("/");
  };

  return (
    <nav style={{ backgroundColor: "lightblue" }}>
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
    </nav>
  );
};

export default NavBar;
