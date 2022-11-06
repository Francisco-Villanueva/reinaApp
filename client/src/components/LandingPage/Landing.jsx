import React from 'react'
import './Landing.css'
import logo from '../../images/logo.jpg'
import fondo from '../../images/fondoImg.jpg'
import {Link} from 'react-router-dom'
import{FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHeadset, faBurger } from '@fortawesome/free-solid-svg-icons'
export default function Landing() {
  return (
    <div className='landing-mainContainer'>
      <div className='img-container-landing'>
        <img src={logo}/>
      </div>

        <div className='cards-Container'>
          <Link  className='link-style' to={'/home'}>
            <div className='cardLanding'>
            <FontAwesomeIcon className='icon-cardLanding' icon={faHeadset}/>
             <p>ATENCION AL CLIENTE</p>
            <span> Tomar pedidos </span>
            </div>
          </Link>
          <Link  className='link-style' to={'/menu'}>
           <div className='cardLanding'>
           <FontAwesomeIcon className='icon-cardLanding' icon={faBurger}/>
            <p>MENÚ</p>
            <span>Editar y ver menú</span>
            </div>
          </Link>
        </div>
    
     

    </div>
  )
}
