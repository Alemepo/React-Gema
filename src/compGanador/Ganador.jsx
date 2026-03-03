import React, { useEffect, useState, useContext } from 'react';
import './Ganador.css';
import { PokemonContext } from "../Context/PokemonContext";

const Ganador = ({ pokemon }) => {
  const { pokemon1, pokemon2 } = useContext(PokemonContext);

  useEffect(() => {
    document.body.style.backgroundColor = "#d1e7dd";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  let datosPokemon = null;

  if (pokemon1 && pokemon1.name === pokemon.toLowerCase()) {
    datosPokemon = pokemon1;
  } else if (pokemon2 && pokemon2.name === pokemon.toLowerCase()) {
    datosPokemon = pokemon2;
  }

  return (
    <div className="pantalla-ganador">
      <div className="tarjeta-victoria">
        <h1>¡VICTORIA PARA!</h1>
        <h2 style={{ color: '#2e7d32' }}>
          {datosPokemon.name.toUpperCase()}
        </h2>

        <img className="foto-pokemon"
          src={datosPokemon.sprites.other['official-artwork'].front_default}
          alt={datosPokemon.name}
        />

        <br />
        <button className="boton-reiniciar" onClick={() => window.location.reload()}>
          Volver a jugar
        </button>
      </div>
    </div>
  );
};

export default Ganador;