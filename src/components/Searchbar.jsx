import { useState } from "react";

const Searchbar = () => {
  const [searchFotos, setSearchFotos] = useState("");
  const categorias = [
    "Natureza",
    "Pessoa",
    "Tecnologia",
    "Animais",
    "Esportes",
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        value={searchFotos}
        onChange={(e) => setSearchFotos(e.target.value)}
      />
      <button>Pesquisar</button>
      <select>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Searchbar;
