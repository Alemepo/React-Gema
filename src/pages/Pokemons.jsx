import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonBattle from "../components/PokemonBattle";
import "./Pokemons.css";

const Pokemons = ({ registerAction }) => {

  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {

        const random1 = Math.floor(Math.random() * 151);
        let random2 = Math.floor(Math.random() * 151);

        while (random1 === random2) {
          random2 = Math.floor(Math.random() * 151);
        }

        fetch(data.results[random1].url)
          .then((res) => res.json())
          .then((pokeData1) => {

            fetch(data.results[random2].url)
              .then((res) => res.json())
              .then((pokeData2) => {

                setPokemon1(pokeData1);
                setPokemon2(pokeData2);

              });

          });

      })
      .catch((error) => console.error("Error:", error));

  }, []);

  return (
    <div className="pokemons-container">
      {pokemon1 && pokemon2 ? (
        <PokemonBattle
          pokemon1={pokemon1}
          pokemon2={pokemon2}
          onNewRound={() => {
            setPokemon1(null);
            setPokemon2(null);
          }}
          registerAction={registerAction}
        />
      ) : (
        pokemon1 && <PokemonCard pokemon={pokemon1} />
      )}
    </div>
  );
};

export default Pokemons;