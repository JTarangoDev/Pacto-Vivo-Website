import React from 'react'
import { Link } from 'react-router-dom'

export const Give = () => {
  return (
    <section className='give'>
        <div className='container'>
            <div className='section-img'>
            </div>
            <div className='section-title'>
                <h3>Siembra</h3>
                <p className='italic'>"El que le suple semilla al que siembra también le suplirá pan para que coma, 
                    aumentará los cultivos y hará que ustedes produzcan una abundante cosecha de justicia." <b>2 Cor. 9:10</b>
                </p>
                <p>Dar es una forma de agradecer a Dios y de contribuir a que más personas conozcan de Cristo. 
                    Puededes apoyar a nuestra iglesia haciendo una donación.</p>

                <Link to='/donar' className='button'>Donar</Link>
            </div>
        </div>
    </section>
  )
}
