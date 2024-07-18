import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <section className='about' id='about'>
        <div className='section-mask'>
            <div className='section-title'>
                <h3>¡Bienvenido a <strong>Casa!</strong></h3>
                <p>Somos una iglesia plantada en la ciudad de Chihuahua, México. 
                  Nuestro deseo es generar impacto en las familias para que puedan experimentar la vida plena y 
                  abundante que nos ofrece Dios, con Cristo como nuestro centro.</p>

                  <Link to='/nosotros' class="cta">
                    <span class="text">Conoce más de nosotros</span>
                  </Link>
            </div>
        </div>
    </section>
  )
}
