import { NotificationContext } from "../context/NotificationContext";
import { useContext } from "react";

const Notification = () => {
  const { notification } = useContext(NotificationContext);

  const successStyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const failStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const style = notification.type === "success" ? successStyle : failStyle;

  if(!notification.message){
    return null;
  }
  return <div style={style}>{notification.message}</div>;
};

export default Notification;
