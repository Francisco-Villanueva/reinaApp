import React from 'react'
import './CardB.css'
import {Link} from 'react-router-dom'
export default function CardB(props) {
  console.log(props)
  return (
    <div className='card-main'>
      <div className='data-container'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <b>$ {props.price}</b>
      </div>
      <div className='btns-container'>
        <Link to={`/editburger/${props.id}`}>edit</Link>
      </div>
    </div> 
  )
}
