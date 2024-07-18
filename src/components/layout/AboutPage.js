import React, { useEffect } from 'react'
import { Navbar } from '../Navbar';
import { useLocation } from 'react-router-dom';

export const AboutPage = () => {

  useEffect(() => {
    document.title = 'Pacto Vivo - Nosotros';
  }, [])

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);


  return (
    <main id='aboutPage'>
      <Navbar/>
      <div className='page'>
        <section className='img-title'>
          <h3>Quiénes Somos</h3>
        </section>

        <section className='text-area wihte-bg'>
          <div className='section-paragraph'>
            <p>Iglesia Pacto Vivo Nace en el corazón de Dios, como una cominidad cristiana con la finalidad de entrenar y crecer juntos como 
              pueblo de Cristo en madurez para alcanzar la realización del propósito de Dios en la vida de cada persona, 
              y lograr juntos la Gran comisión <b className='italic'>(Mateo 28)</b>; preparados, maduros, 
              conscientes, dispuestos y disponibles dando en todo la Gloria a Dios.
            </p>
            
            <p>Ciertamente la bendición sobre esta casa no es solo para nosotros. Dios ama generosamente y nuestra convicción, 
              como iglesia y como discípulos de Jesús, es crear un ambiente para que tú puedas compartir de lo que has recibido.
            </p>

            <p>Nuestra oración es que cada uno se levante como torrente, trayendo vida sobre todo lo que esté seco, 
              dando un fruto que impacte a las siguientes generaciones, que cada vida y hogar de nuestra iglesia puedan ser bendecidos y 
              prosperados al confiar en Dios en este importante paso de fe.
            </p>
          </div>
        </section>

        <section className='text-area'>
            <h3 className='section-title'>Creemos</h3>
            <ul>
              <li>Edificar un cuerpo a la imagen de Cristo.<strong className='italic'> Colosenses 1:15, Efesios 1:22.</strong></li>
              <li>Ser adoradores en espíritu y en verdad.<strong className='italic'> Juan 4:23-24.</strong></li>
              <li>Promover la paz y la buena voluntad entre las personas.<strong className='italic'> Mateo 7:12.</strong></li>
              <li>Mostrar su amor y compasión a todo el mundo.<strong className='italic'> Efesios 5:2.</strong></li>
              <li>Salvar lo que se había perdido.<strong className='italic'> Juan 3:16, 1 Juan 3:16.</strong></li>
              <li>Servir y ser útiles a la sociedad.<strong className='italic'> Mateo 23:11-12.</strong></li>
            </ul>
        </section>

        <section className='text-area' id='mision'>
          <h3 className='section-title'>Misión</h3>
          <div className='section-paragraph'>
            <p>Ser cada uno un discípulo, enraizado y construido en Cristo Jesús.</p>
            <p>Cada Familia discipulada para Cristo.</p>
            <p>Cada uno unido en un ministerio para Cristo.</p>
          </div>
        </section>

        <section className='text-area' id='mision'>
          <h3 className='section-title'>Valores</h3>
          <ul>
            <li>Amor</li>
            <li>Excelencia</li>
            <li>Compromiso</li>
            <li>Fidelidad</li>
          </ul>
        </section>

        <section className='pastors'>
          <h3 className='section-title'>Nuestros Pastores</h3>
          <span>Pedro y Yelly Tarango</span>
          <img src={require('../../images/pastores.png')}></img>
        </section>
      </div>
      
    </main>
  )
}