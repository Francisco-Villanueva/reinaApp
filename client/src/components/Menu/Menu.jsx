import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBurgers } from '../../actions'
import BackBtn from '../Btn-backNavigate/BackBtn'
import CardB from './burgerCard/CardB'
import './Menu.css'
export default function Menu() {
    const dispatch = useDispatch()
    const burgers = useSelector(state=> state.burgersMenu)
    useEffect(()=>{
        dispatch(getBurgers())
    },[])
  return (
    <div>
      <BackBtn/>
        <h2>LISTA DE BURGERS</h2>
        <div className='card-container'>

        {burgers.map((b)=>(<CardB key= {b.id} id={b.id}name={b.name} price={b.price} description={b.description}/>))}
        </div>
        
    </div>
  )
}
