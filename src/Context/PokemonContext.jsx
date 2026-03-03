import { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  return (
    <PokemonContext.Provider value={{ pokemon1, setPokemon1, pokemon2, setPokemon2 }}>
      {children}
    </PokemonContext.Provider>
  );
}