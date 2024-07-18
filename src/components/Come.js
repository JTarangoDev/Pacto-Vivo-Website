import React from 'react'

export const Come = () => {
  return (
    <section className='come'>
        <div className='section-title'>
            <h3>Acompañanos en nuestro servicio</h3>
            <span>Horarios de Reunión</span>
            <div className='schedule'>
                <ul>
                    <li><strong>Domingo</strong><br/> 11:00 am</li>
                    <li><strong>Miércoles</strong><br/> 07:00 pm</li>
                    
                </ul>
            </div>
            <span className='address-span'>Sabino Torres #401 B, Col. Deportistas, Chihuahua, Chih. México</span>
            <a className='bttn' target='_blank' href='https://www.google.com/maps/place/Pacto+Vivo/@28.6974528,-106.1256353,17z/data=!3m1!4b1!4m6!3m5!1s0x86ea43276fe16e47:0xb4d6a745d024aab0!8m2!3d28.6974481!4d-106.1230604!16s%2Fg%2F11hzkpngfx?entry=ttu'>Cómo llegar</a>
        </div>
        <div className='section-image'>
            <img src={require('../images/come-img.jpg')} alt='Comunidad Pacto Vivo'></img>
        </div>
    </section>
  )
}
