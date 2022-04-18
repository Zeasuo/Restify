import logo from './logo.svg';
import './App.css';
import Router from "./components/Router";
import { notificationAPIContext } from "./context/notificationAPIContext";
import React, {useState} from "react";

function App() {
  const [notifications, setNotifications] = useState([])
  return (
    <notificationAPIContext.Provider value={{notifications, setNotifications}}>
      <Router />
    </notificationAPIContext.Provider>
  );
}

export default App;
