import { useState, useEffect } from "react";
import axios from "axios";

import FotoAmpliada from "./components/FotoAmpliada";
import FotoList from "./components/FotoList";
import Searchbar from "./components/Searchbar";

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);

  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get("https://api.unsplash.com/photos", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });

    setFotos(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, []);

  return (
    <div className="container">
      <Searchbar />
      <FotoList fotos={fotos} />
      <FotoAmpliada />
    </div>
  );
}

export default App;
