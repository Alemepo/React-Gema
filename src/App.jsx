import './App.css'
import { PokemonProvider } from "./Context/PokemonContext";
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import React, { useState, useCallback } from 'react'

function App() {
  const [actionLabel, setActionLabel] = useState(null)
  const [actionHandler, setActionHandler] = useState(null)

  const registerAction = useCallback((label, fn) => {
    setActionLabel(label)
    setActionHandler(() => fn)
  }, [])

  return (
    <PokemonProvider>
        <Home actionLabel={actionLabel} actionHandler={actionHandler} />
        <Pokemons registerAction={registerAction} />
    </PokemonProvider>
  )
}

export default App
