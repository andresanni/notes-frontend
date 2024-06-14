import { Alert } from "@mui/material";
import useNotification from "../hooks/useNotification";

const Notification = () => {
  const { notification } = useNotification();  

  
  if(!notification.message){
    return null;
  }
  return <Alert severity={notification.type}>{notification.message}</Alert>
};

export default Notification;
