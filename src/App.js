import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Allegiances } from "./pages/Allegiances";
import Characters from "./pages/Characters";
import { State } from "./context/State";

function App() {
  return (
    <State>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/allegiances" element={<Allegiances />}>
              <Route path=":houseId" element={<Allegiances />} />
            </Route>
            <Route path="*" element={<h1>Oops... there is nothing here!</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </State>
  );
}

export default App;
