import notesReducer from "./reducers/notesReducer";
import userReducer from "./reducers/userReducer";

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        notes:notesReducer,
        user: userReducer
    }
})

export default store;