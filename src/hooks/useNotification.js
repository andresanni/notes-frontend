import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useNotification = ()=>{
    const context = useContext(NotificationContext);
    if(!context){
        throw new Error("Context undefined")
    }
    return context;
}

export default useNotification;