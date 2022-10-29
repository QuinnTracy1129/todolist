import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mdb-react-ui-kit/dist/css/mdb.min.css"; // eslint-disable-next-line
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://wonderful-horse-94f9d5.netlify.app/";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
