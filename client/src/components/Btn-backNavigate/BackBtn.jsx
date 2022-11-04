import React from 'react'
import './BackBtn.css'
import {useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function BackBtn() {
    const nav = useNavigate()
    const goBack=()=>{
        nav(-1)
    }
  return (
    <div className='btnBack-container'>
        <button className='btn-back' onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    </div>
  )
}
