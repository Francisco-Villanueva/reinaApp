import React from 'react'
import './Landing.css'
import logo from '../../images/logo.jpg'
import fondo from '../../images/fondoImg.jpg'
import {Link} from 'react-router-dom'
export default function Landing() {
  return (
    <div className='landing-mainContainer'>
      <Link to={'/home'}>
        <h1>REINA BURGUESA</h1>
      </Link>
      <Link to={'/menu'}>
        <h1>MENU</h1>
      </Link>

        <img src={logo}/>
    </div>
  )
}
