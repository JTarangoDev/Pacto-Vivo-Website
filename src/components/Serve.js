import React from 'react'

export const Serve = () => {
  return (
    <section className='serve'>
        <div className='section-image'>
            <img src={require('../images/serve-img.jpg')} alt='Servidores Pacto Vivo'></img>
        </div>

        <div className='section-title'>
            <h3>Unete a un equipo</h3>
            <p className='italic'>"El más grande entre ustedes debe servir a los demás. 
                Porque el que así mismo se engrandece, será humillado; y el que se humilla, 
                será engrandecido." <b>Mt. 23:11-12</b></p>
            <p>Acércate y sirve junto a nosotros en alguno de nuestros equipos.</p>
        </div>
    </section>
  )
}
