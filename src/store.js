import notesReducer from "./reducers/notesReducer";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        notes:notesReducer
    }
})

export default store;