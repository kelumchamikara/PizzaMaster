import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='banner'>
        <Navbar />
       <div className='banner__content'>
         <div className='container'>
            <div className='banner__text'>
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>I wish to inform you that I will be representing our Institute at the badminton tournament which is 
               scheduled to take place on the 10th and 11th of December 2022.
            </p>
            <div className='banner__btn'>
                <a href='' className='btn-smart'><button>DELIVERY NOW</button></a>
            </div>
            </div>
         
         </div>
       </div>
    </div>
  )
}

export default Header
