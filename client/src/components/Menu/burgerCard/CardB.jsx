import React from 'react'

export default function CardB(props) {
  return (
    <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <b>{props.price}</b>
    </div>
  )
}
