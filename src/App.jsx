import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SplashScreen from "./pages/SplashScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
