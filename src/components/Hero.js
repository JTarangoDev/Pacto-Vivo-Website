import React from 'react'

export const Hero = () => {
  
  return (
      <section className='hero' id='hero'>
        <div className='section-container'>
          <div className='section-title'>
            <img src={require("../images/logo-comp.png")} alt=''></img>
            <span>Una Familia Para todos</span>
          </div>
        </div> 
      </section>

  )
}
