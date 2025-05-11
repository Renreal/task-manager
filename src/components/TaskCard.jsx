import React from 'react'
import "../styles/TaskCard.css"
export default function TaskCard({number, description, icon, bgColor}) {
  return (
    <div className='task-card'>
      <div className='card-header'>
        <span className='task-number'>{number}</span>
        <img className='status-icon' style={{backgroundColor: bgColor}} src={icon} alt="Status icon" />
      </div>
      <div className='card-status' style={{backgroundColor: bgColor, borderColor: bgColor}}>
        <span className='status-descrispantion' >{description}</span>
      </div>
    </div>
  )
}
