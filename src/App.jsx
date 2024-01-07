import { useState, useEffect } from "react";

import FotoAmpliada from "./components/FotoAmpliada";
import FotoList from "./components/FotoList";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="container">
      <Searchbar />
      <FotoList />
      <FotoAmpliada />
    </div>
  );
}

export default App;
