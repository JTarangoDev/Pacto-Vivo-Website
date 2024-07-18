import React, { useEffect } from 'react'
import { Hero } from '../Hero';
import { About } from '../About';
import { Come } from '../Come';
import { Serve } from '../Serve';
import { Pray } from '../Pray';
import { Give } from '../Give';
import { Ministries } from '../Ministries';
import { Navbar } from '../Navbar';
import { useLocation } from 'react-router-dom';

export const Home = () => {

  useEffect(() => {
    document.title = 'Pacto Vivo - Una Familia Para Todos';
  }, [])

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <main id='home'>
      <Navbar/>
      <Hero/>
      <About/>
      <Come/>
      <Pray/>
      <Give/>
      <Serve/>
      <Ministries/>
    </main>
  )
}
