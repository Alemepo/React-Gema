import React from 'react'
import './ActionButton.css'

const ActionButton = ({ label, onClick, disabled }) => {
  return (
    <button className="action-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default ActionButton
