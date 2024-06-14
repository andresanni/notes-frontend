import { createContext, useReducer } from "react";

const NotificationContext = createContext();

const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { message: action.payload.message, type: action.payload.type };
    case HIDE_NOTIFICATION:
      return "";
    default:
      return state;
  }
};

const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, "");

  const showNotification = (message, type) => {
    dispatch({ type: SHOW_NOTIFICATION, payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: HIDE_NOTIFICATION });
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
