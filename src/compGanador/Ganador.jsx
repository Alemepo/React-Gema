import React, { useEffect, useState } from 'react';
import './Ganador.css';

const Ganador = (props) => {
  const [datosPokemon, setDatosPokemon] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#d1e7dd";

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.toLowerCase()}`)
      .then(res => res.json())
      .then(data => {
        setDatosPokemon(data);
      });

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [props.pokemon]);

  if (!datosPokemon) return <div>Cargando ganador...</div>;

  return (
    <div className="pantalla-ganador">
      <div className="tarjeta-victoria">
        <h1>¡VICTORIA PARA!</h1>
        <h2 style={{ color: '#2e7d32' }}>{datosPokemon.name.toUpperCase()}</h2>
        
        <img 
          className="foto-pokemon"
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