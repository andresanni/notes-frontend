import { Link } from "react-router-dom";

const NavBar = ({ loggedUser, handleLogout }) => {
  return (
    <nav style={{ backgroundColor: "lightblue" }}>
      <h1>Notes app</h1>
      <ul>
        {loggedUser ? (
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
      {loggedUser && (
        <div>
          {loggedUser.username} logged in
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
