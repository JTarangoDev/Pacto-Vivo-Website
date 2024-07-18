import { Icon } from '@iconify/react/dist/iconify.js'
import {  Link, NavLink } from 'react-router-dom'

export const Footer = () => {

  return (
    <footer className='footer' id='footer'>
        <div className='foo-wraper'>
            <section className='links'>
                <div className='logo'>
                    <Link to="/inicio">
                        <img src={require('../images/logo.png')} alt=''></img>
                    </Link>
                </div>
                <div className='social-links'>
                    <a href='https://www.youtube.com/@PactoVivoCuu' target='_blank' rel='noreferrer'><Icon icon="ph:youtube-logo-fill"/></a>
                    <a href='https://www.instagram.com/pactovivo/' target='_blank' rel='noreferrer'><Icon icon="uil:instagram" /></a>
                    <a href='https://wa.link/8d1j75'><Icon icon="uil:whatsapp" /></a>
                    <a href='https://www.facebook.com/PactoVivoCuu' target='_blank' rel='noreferrer'><Icon icon="uil:facebook" /></a>
                </div>
            </section>

            <section className='info-nav'>
                <div className='foo-info'>
                    <span>+52 614 522 7001</span>
                    <a href='mailto: iglesiapactovivo@gmail.com'>iglesiapactovivo@gmail.com</a>
                    <span>Calle Sabino Torres #401 B, Col. Deportistas, Chihuahua, Chih, México</span>
                </div>
                <div className='foo-nav'>
                    <NavLink to='/nosotros'>Nosotros</NavLink>
                    <NavLink>Universidad Pacto Vivo</NavLink>
                    <NavLink to='/oracion'>Oración</NavLink>
                    <NavLink to='/donar'>Donar</NavLink>
                </div>

            </section>
            <div className='rights'>
                <span >&copy; {new Date().getFullYear()} Iglesia Pacto Vivo</span>
            </div>
            
        </div>
        
    </footer>
  )
}
