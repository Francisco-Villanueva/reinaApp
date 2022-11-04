import React from 'react'
import './Landing.css'
import logo from '../../images/logo.jpg'
import fondo from '../../images/fondoImg.jpg'
import {Link} from 'react-router-dom'
export default function Landing() {
  return (
    <div className='landing-mainContainer'>
      <div className='img-container'>
        <img src={logo}/>
      </div>

        <div className='cards-Container'>
          <Link  className='link-style' to={'/home'}>
            <div className='cardLanding'>
             <p>REINA BURGUESA</p>
            <span> Tomar pedidos </span>
            </div>
          </Link>
          <Link  className='link-style' to={'/menu'}>
           <div className='cardLanding'>
            <p>MENU</p>
            <span>Editar y ver menú</span>
            </div>
          </Link>
        </div>
    
     

    </div>
  )
}
