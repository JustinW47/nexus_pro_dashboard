import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "UserDataContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./i18n";
import { LogoutProvider } from "hooks/useLogout";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <UserProvider>
      <LogoutProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </LogoutProvider>
    </UserProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
