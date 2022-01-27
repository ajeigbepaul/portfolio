import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import StateProvider from "./StateProvider";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <div className="app">
      <Router>
        <StateProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <Admin />
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </StateProvider>
      </Router>
    </div>
  );
}

export default App;
