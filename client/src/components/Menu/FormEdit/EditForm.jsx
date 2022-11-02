import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editBurger, getBurgerInfo } from '../../../actions'
import './EditForm.css'
export default function EditForm(props) {
    let {id}= useParams()
    const dispatch = useDispatch()
    const burgData = useSelector(s=>s.burgerData)
    const[data, setData] = useState({
        name:'',
        description:'',
        price: ''
    })
    useEffect(()=>{dispatch(getBurgerInfo(id))
        console.log('BURGA: ',burgData)
    },[])

    const handleInput =(e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleEdit=()=>{
        dispatch(editBurger(id,data))
    }
  return (
    <div className='form-main'>
        <h2>Editar Burger</h2>
        <div>
            <p>{burgData.name}</p>
            <p>{burgData.description}</p>
            <p>$ {burgData.price}</p>
        </div>
        <div className='burgerData-container'>
            <h3>Completar datos :</h3>
        <input  autoComplete="off" name='name' value={data.name}  onChange={handleInput} type="text" placeholder='Nombre'  />
        <input  autoComplete='off'  name='description' value={data.descriptionprice}  onChange={handleInput} type="text" placeholder='Descripcion'  />
        <input  autoComplete='off  ' name='price' value={data.price} onChange={handleInput} type="number" placeholder='Precio'  />
        <button onClick={handleEdit}>Cargar</button>
        </div>


    </div>
  )
}
