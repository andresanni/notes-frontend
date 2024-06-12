import {
  loginStart,
  loginSucces,
  loginFailure,
  logout,
  setUser,
} from "../reducers/userReducer";
import noteService from "../services/notes";
import loginService from "../services/login";


const checkLogged = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      noteService.setToken(user.token);
      dispatch(setUser({ username: user.username, token: user.token }));
    }
  };
};

const loginAction = (credencials, showNotification) => {
  return async (dispatch) => {
    dispatch(loginStart());
    const { username, password } = credencials;
    try {
      const user = await loginService.login({ username, password });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      noteService.setToken(user.token);
      dispatch(loginSucces({ username: user.username, token: user.token }));
      showNotification("User logged succesfully", "success");
    } catch (exception) {
      dispatch(loginFailure(exception.message));
      showNotification("bad credencials", "error");      
    }
  };
};

const logoutAction = (showNotification) => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedNoteappUser");
    noteService.setToken(null);
    dispatch(logout());
    showNotification("BYE!!", "success");      

  };
};

export { checkLogged, loginAction, logoutAction };
