import React, { useState } from 'react'
import coinImage from '../assets/coin.jpg'
import './Home.css'
import ActionButton from '../components/ActionButton'

const Home = ({ actionLabel, actionHandler }) => {
  const values = ['Tails', 'Heads']
  const [tails, setTails] = useState(0)
  const [heads, setHeads] = useState(0)

  const [clicked, setClicked] = useState(false)
  const [lastAction, setLastAction] = useState(null)

  const handleFlip = () => {
    setClicked(true)
    const idx = Math.floor(Math.random() * 2)
    if(values[idx] === 'Tails'){
        setTails(tails + 1)
    }
    else{
        setHeads(heads + 1)
    }
  }

  const handleActionClick = async () => {
    if (actionHandler) {
      const res = await actionHandler()
      if (res) {
        setLastAction(res)
      }
    } else {
      handleFlip()
    }
    setClicked(true)
  }

  return (
    <div className='main-container'>
        <h2>Welcome to the coin game</h2>
        <img src={coinImage} alt="" />
        <ActionButton label={actionLabel || "Flip"} onClick={handleActionClick} />
        {lastAction && (
          <h4>{lastAction.attacker} ha golpeado</h4>
        )}
        {clicked && !lastAction && (
        <h4> Hey you have got {tails} tails and {heads} heads. Hihi</h4>
        )}
    </div>
  )
}

export default Home