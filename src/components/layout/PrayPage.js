import React, { useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Navbar } from '../Navbar';
import { useLocation } from 'react-router-dom';

export const PrayPage = () => {

    useEffect(() => {
        document.title = 'Pacto Vivo - Oración';
      }, [])

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);


  return (
    <main id='prayPage' className='prayPage'>
        <Navbar/>
        <div className='page'>
            <section className='img-title'>
                <h3>Oración</h3>
            </section>

            <section className='text-area'>
                <h3 className='section-title'>Oración de salvación</h3>
                <div className='section-paragraph italic'>
                    <p>
                        "Dios Eterno, hoy me acerco ante tu presencia para reconocer que soy pecador, 
                        que he hecho lo malo delante de tus ojos desde el principio, y estoy arrepentido de mis malas 
                        obras, deseo que me perdones todos mis pecados y las transgresiones que he cometido.
                    </p>
                    <p>
                        Es por eso que vengo hoy ante ti para pedirte que entres en mi corazón y en mi vida, 
                        creo que tu enviaste a tu único hijo Jesús a la tierra para morir por mi en una cruz, 
                        que su sangre limpia todos mis pecados y que Él no solo murió sino también tu lo levantaste de los muertos. 
                        Hoy confieso que acepto al Señor Jesucristo como el señor y salvador de mi vida. Jesús, te entrego mi vida 
                        para que tu la cambies y sea de honra a ti, y desde este momento ayúdame para poder servirte y amarte, 
                        hasta que tu me lleves en gloria.
                    </p>
                    <p>
                        En el nombre de Jesús, Amén."
                    </p>
                </div>
            </section>

            <section className='text-area links-section'>
                <h3 className='section-title'>¿Necesitas oración?</h3>
                <div className='section-paragraph' style={{textAlign: "center"}}>
                    <p>Puedes ponerte en contacto con nosotros por Whatsapp o enviando un correo electrónico para que oremos por ti.</p>
                </div>
                <div className='links'>
                    <a href='https://wa.link/8d1j75' className='whatsapp'><Icon icon="uil:whatsapp" /></a>
                    <a href='mailto: iglesiapactovivo@gmail.com' className='mail'><Icon icon="topcoat:email" /></a>
                </div>
                
            </section>
        </div>
        
    </main>
  )
}
