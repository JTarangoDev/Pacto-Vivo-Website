import React, { useEffect } from 'react'
import { Navbar } from '../Navbar';
import { Icon } from '@iconify/react/dist/iconify.js'
import { useLocation } from 'react-router-dom';

export const GivePage = () => {

    useEffect(() => {
        document.title = 'Pacto Vivo - Donar';
      }, [])

    const { pathname } = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0)
    }, [pathname]);

  return (
    <main id='givePage' className='givePage'>
        <Navbar/>
        <div className='page'>
            <section className='img-title'>
                <h3>Siembra</h3>
            </section>

            <section className='text-area'>
                <h3 className='section-title'>Sembrar con generosidad</h3>
                <div className='section-paragraph'>
                    <p>
                        Pacto Vivo nace como una iglesia local con un llamado global pues tiene la visión de compartir el evangelio de Jesús en todo el mundo.
                        Dios nos ha llamado a ser familia, nos ha bendecido y seguimos trabajando aún con más amor y convicción que al inicio. 
                        Es emocionante ver a Dios cumplir una visión, pero sobre todo ver vidas y familias restauradas y fortalecidas en el Señor.
                        Es por esta bendicion que adoptamos un estilo de vida de generosidad y creemos que es un aspecto importante para nuestra vida en Cristo.
                    </p>
                    <p>
                        Así como creemos que cada persona es unica, tambien creemos que cada expresión de generosidad lo es. Es por eso que celebramos las distintas
                        aportaciones de siembra y servicio. Esto incluye aportaciones financieras o la dedicación de tiempo sirviendo como voluntario
                        dentro de la iglesia.
                    </p>
                </div>
            </section>

            <section className='give-info'>
                <h3 className='section-title'>Formas de donar</h3>
                <div className='section-text'>
                    <div className='bank'>
                        <h4>Deposito / Transferencia Bancaria</h4>
                        <div className='info'>
                            <span><strong>Cuenta: </strong>047 158 6998</span>
                            <span><strong>Clabe: </strong>012 150 0047 1586 9988</span>
                            <span><strong>No. Tarjeta: </strong>4152 3139 1914 3433</span>
                            <span><strong>Banco: </strong>BBVA</span>
                        </div>
                    </div>
                    <div className='paypal'>
                        <h4>Donar con PayPal</h4>
                        <a><Icon icon="mdi:paypal" />Donar</a>
                    </div>
                </div>
            </section>

            <section className='text-area'>
                <div className='section-paragraph'>
                    <p className='italic'>
                        "El que siembra escasamente, escasamente cosechará, y el que siembra en abundancia, en abundancia cosechará. 
                        Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, 
                        porque Dios ama al que da con alegría." <b>2 Corintios 9:6-7</b>
                    </p>
                </div>
            </section>
        </div>
    </main>
  )
}
