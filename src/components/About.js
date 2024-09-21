import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
        <div className='col-6 p-25'>
        <h3>About Us</h3>
        <h1>WELCOME TO<br></br> MASTRO PIZZINI</h1>
        <p>I wish to inform you that I will be representing our Institute at the badminton tournament which is scheduled to take place on the 10th and 11th of December 2022.</p>
        
        <div className='banner__btn'>
                <a href='' className='btn-smart'><button>READ MORE</button></a>
        </div>
        </div>

        <div className='col-6'>
          <div className='about__img'>
            <img src='/img/pizza2.jpg' alt='Pizza'/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
