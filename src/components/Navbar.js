import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [navBar, setNavBar] = useState ('navbar')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () =>{
        if(window.scrollY > 0){
            setNavBar('scrolled')
        }else{
            setNavBar('navbar')
        }
    }

    const toggleMenu = () => {

        let input = document.getElementById('burger');
        if (input.checked){
            let menu = document.getElementById('menu');
            menu.classList.toggle('showed');
        }        
    }
    

  return (
    <section id='navbar'>
        <div className={navBar}>
            <div className='nav-logo'>
                <NavLink to="/inicio" >
                    <img src={require('../images/logo.png')} alt='Logo Iglesia Pacto Vivo'></img>
                </NavLink>
            </div>
            <div className='nav-links'>
                <NavLink to='/inicio'>Inicio</NavLink>
                <NavLink to='/nosotros' className={({isActive}) => isActive ? 'active' : ''}>Nosotros</NavLink>
                <NavLink  className={({isActive}) => isActive ? '' : ''}>Universidad Pacto Vivo</NavLink>
                <NavLink to='/oracion' className={({isActive}) => isActive ? 'active' : ''}>Oración</NavLink>
                <NavLink to='/donar' className={({isActive}) => isActive ? 'active' : ''}>Donar</NavLink>
            </div>
        </div>

        <div className='mobile-navbar'>
            <div className='bar'>
                <div className='nav-logo'>
                    <Link to="/inicio">
                        <img src={require('../images/logo-font.png')} alt='Logo Iglesia Pacto Vivo'></img>
                    </Link>
                </div>
                <div className='toggle-menu'>
                    <label class="burger" for="burger" onClick={toggleMenu}>
                        <input type="checkbox" id="burger"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </div>
            
            <div className='menu' id='menu'>
                <div className='links'>
                    <NavLink to='/inicio'>Inicio</NavLink>
                    <NavLink to='/nosotros'>Nosotros</NavLink>
                    <NavLink >Universidad Pacto Vivo</NavLink>
                    <NavLink to='/oracion'>Oración</NavLink>
                    <NavLink to='/donar'>Donar</NavLink>
                </div>
                
            </div>
        </div>

    </section>
  )
}
