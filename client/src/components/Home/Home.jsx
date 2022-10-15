import React from 'react'
import { Testeando } from '../Testeando'
import { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import * as actionCreatos from '../../actions'
import { connect } from 'react-redux'
import logo from '../../images/logo.jpg'
import './Home.css'
export  function Home(props) {
    useEffect(() => {
        props.getMenu()
        console.log(props.name);
      }, []);
  return (
    <div className='home-container'>
        <div className='navbar'>
            <div className='nav-izq'>
                <img src={logo} alt='logoReinA'/>
                <h1>Reina Burguesa</h1>
            </div>
            <div className='nav-der'>
                <span>social</span>
            </div>
        </div>

    <div className='body'>

        <div className='main-container'>
            <div className='menu-container'>
                <Testeando menu={props.menu}/>
            </div>
            <div className='pedido-container'>
                Pedido
            </div>
        </div>
    </div>
        
    </div>
  )
}

const mapStateToProps =(state)=>({
    menu: state.menuLoaded,
})
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(actionCreatos, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)