import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import { ThemeProvider } from "@mui/material";
import { ThemeContextProvider } from "./ThemeContext.tsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      {/* <ThemeContextProvider> */}
        <Provider store={store}>
          <ToastContainer />
          <App />
        </Provider>
      {/* </ThemeContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
