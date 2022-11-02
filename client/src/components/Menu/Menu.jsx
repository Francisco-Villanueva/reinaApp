import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBurgers } from '../../actions'
import CardB from './burgerCard/CardB'

export default function Menu() {
    const dispatch = useDispatch()
    const burgers = useSelector(state=> state.burgersMenu)
    useEffect(()=>{
        dispatch(getBurgers())
    },[])
  return (
    <div>
        <h2>LISTA DE BURGERS</h2>
        <ol>
        {burgers.map((b)=>(<CardB name={b.name} price={b.price} description={b.description}/>))}
        </ol>
    </div>
  )
}
