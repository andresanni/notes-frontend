import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { Container } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <NotificationProvider>
      <Router>       
          <App />        
      </Router>
    </NotificationProvider>
  </Provider>
);
