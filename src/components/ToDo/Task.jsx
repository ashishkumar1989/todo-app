import React from 'react'
import './Task.css'

function Task(props) {
    
    const taskName = props.name;

  return (
    <li className='list-group-item d-flex justify-content-between align-item-center' key={props.index}>
    <span>{taskName}</span>
    <i className="fa-regular fa-trash-can delete" onClick={()=>{props.onDelete(props.id)}}></i>
   </li>
  )
}

export default Task