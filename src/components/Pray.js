import React from 'react'
import { Link } from 'react-router-dom'

export const Pray = () => {
  return (
    <section className='pray'>
        <div className='container'>
            <div className='section-title'>
                <h3>Oración</h3>
                <p>¿Necesitas que oremos por ti?</p>
                <p>Queremos acompañarte, no dudes en acercarte para orar juntos.</p>
            </div>
            <Link to='/oracion' class="cta">
                <span class="text">Ponte en contacto con nosotros</span>
            </Link>
        </div>
        
    </section>
  )
}
