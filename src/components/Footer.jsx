import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <div  className='d-flex shadow text-black justify-content-evenly p-5'>
      <div >
        <h3 className='py-2 text-2xl'><span><i className="fa-brands fa-docker pe-2"></i></span>Project Fair</h3>
        <p>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our <br /> contributors.</p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>
      </div>
      <div>
        <ul style={{listStyle:'none'}}>
          <li className='fw-bolder fs-3 py-2'>Links</li>
          <li><Link style={{textDecoration:'none'}} to={'/'} >Home</Link></li>
          <li><Link style={{textDecoration:'none'}} to={'/dash'}>Dashboard</Link></li>
          <li ><Link style={{textDecoration:'none'}} to={'/projects'}>Projects</Link></li>
        </ul>
      </div>
      <div>
      <ul style={{listStyle:'none'}}>
          <li className='fw-bolder fs-3 py-2'>Guides</li>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>React Router</li>
        </ul>
      </div>
      <div>
        <h3 className='fs-3 fw-bolder py-2'>Contact us</h3>
        <input className='rounded p-2 border-0' type="text" placeholder='Enter your Email here' /><span><i className="fa-solid fa-arrow-right ms-2 fs-4"></i></span>
        <div className='d-flex justify-content-between mt-2 fs-4'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-solid fa-phone"></i>

        </div>
        
      </div>
    </div>
    <div className=' text-white text-center py-3'><p>Copyright <i class="fa-regular fa-copyright"></i> Project Fair, All rights reserved</p></div>
  </div>
  )
}

export default Footer
