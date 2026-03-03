import './App.css'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import React, { useState } from 'react'

function App() {
  const [actionLabel, setActionLabel] = useState(null)
  const [actionHandler, setActionHandler] = useState(null)

  const registerAction = (label, fn) => {
    setActionLabel(label)
    setActionHandler(() => fn)
  }

  return (
    <React.Fragment>
        <Home actionLabel={actionLabel} actionHandler={actionHandler} />
        <Pokemons registerAction={registerAction} />
    </React.Fragment>
  )
}

export default App
