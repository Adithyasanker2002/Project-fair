import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
   <div style={{height:'100vh'}} className=' my-5 d-flex justify-content-center align-items-center flex-column'>
    <h1 style={{fontSize:'80px'}}>404!</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dz7VMUv6R17BYG8Ht_rEkbnahgHYQGxEjA&s" alt="" className="img-fluid" />
    <h1>Looks Like You're Lost</h1>
    <p>The page you are looking for is not available</p>
    <Link to={'/'} className='btn btn-warning'> Go to Home</Link>
   </div>
  )
}

export default Pnf
