import React, { useState, useEffect } from "react";
import PokemonCard from "../pages/PokemonCard";
import "./PokemonBattle.css"; // estilos propios para la batalla
import Ganador from '../compGanador/Ganador.jsx';

const PokemonBattle = ({ pokemon1, pokemon2, onNewRound, registerAction }) => {
  const [hits1, setHits1] = useState(0);
  const [hits2, setHits2] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (hits1 >= 3) setWinner(pokemon1.name);
    else if (hits2 >= 3) setWinner(pokemon2.name);
  }, [hits1, hits2, pokemon1, pokemon2]);

  const attack = () => {
    if (winner) return null;
    if (Math.random() < 0.5) {
      const newHits = hits1 + 1;
      setHits1(newHits);
      if (newHits >= 3) setWinner(pokemon1.name);
      return { attacker: pokemon1.name, hits1: newHits, hits2 };
    } else {
      const newHits = hits2 + 1;
      setHits2(newHits);
      if (newHits >= 3) setWinner(pokemon2.name);
      return { attacker: pokemon2.name, hits1, hits2: newHits };
    }
  };

  
  useEffect(() => {
    if (!registerAction) return;
    if (!pokemon1 || !pokemon2) return;

    const actionFn = () => attack();
    registerAction('Atacar', actionFn);
    return () => registerAction(null, null);
  }, [registerAction, pokemon1, pokemon2, hits1, hits2, winner]);

  if (winner) {
    return <Ganador pokemon={winner} />;
  }

  return (
    <div className="battle-container">
      <div className="fighters">
        <PokemonCard pokemon={pokemon1} />
        <PokemonCard pokemon={pokemon2} />
      </div>

      <div className="status">
        <p>{pokemon1.name}: {hits1} golpes</p>
        <p>{pokemon2.name}: {hits2} golpes</p>
        {winner && <h3>¡Ganador: {winner.toUpperCase()}!</h3>}
      </div>
    </div>
  );
};

export default PokemonBattle;
