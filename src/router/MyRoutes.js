import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../components/layout/Home'
import { Footer } from '../components/Footer'
import { AboutPage } from '../components/layout/AboutPage'
import { PrayPage } from '../components/layout/PrayPage'
import { GivePage } from '../components/layout/GivePage'


export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <section>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/inicio' element={<Navigate to='/'/>}></Route>
                <Route path='/nosotros' element={<AboutPage/>}></Route>
                <Route path='/oracion' element={<PrayPage/>}></Route>
                <Route path='/donar' element={<GivePage/>}></Route>
            </Routes>
        </section>
        <Footer/>
    </BrowserRouter>
  )
}
