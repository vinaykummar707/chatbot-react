import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Dashboard } from "./Dashboard.jsx";
import { ChatEntryPage } from "./ChatEntryPage.jsx";
import { ChatEntryPage2 } from "./ChatEntryPage2.jsx";
import { MessagesScreen } from "./MessagesScreen.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessagesScreen />
  </React.StrictMode>,
);
