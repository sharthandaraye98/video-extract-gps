import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVideo from "./screen/AddVideo";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<AddVideo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
