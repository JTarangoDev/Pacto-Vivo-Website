import React from 'react'

export const Ministries = () => {
  return (
    <section className='ministries'>
        <div className='section-title'>
            <h3>Ministerios</h3>
        </div>
        <div className='logos'>

                <img src={require('../images/ministries/casas-pacto.png')}></img>

                <img src={require('../images/ministries/mujeres.png')}></img>

                <img src={require('../images/ministries/hombres-reino.png')}></img>

                <img src={require('../images/ministries/youth.png')}></img>  

                <img src={require('../images/ministries/consejeria.png')}></img>

                <img src={require('../images/ministries/habla-vida.png')}></img>

                <img src={require('../images/ministries/kids.png')}></img>

                <img src={require('../images/ministries/teens.png')}></img>
        </div>
    </section>
  )
}
