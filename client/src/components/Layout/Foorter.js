import React from 'react'
import { Link } from 'react-router-dom'


const Foorter = () => {
  return (
    <div className='footer'>
        <h4 className="text-center">
            All Right Reserved &copy; Sanchit
        </h4>
        <p className='text-center mt-3'>
          <Link to="/about">About</Link>
            |
          <Link to="/contact">Contact</Link>
            |
          <Link to="/policy">Privacy Policy</Link>


        </p>
        <div className="right">
          <img src="/images/payment.png" alt="payment templete" />
        </div>
    </div>
  )
}

export default Foorter