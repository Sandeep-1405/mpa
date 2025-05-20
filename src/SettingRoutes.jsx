// src/main-blog.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./Settings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
);
