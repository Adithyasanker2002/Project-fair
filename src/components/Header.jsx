import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenContext } from '../context/TokenAuth'

const Header = ({insideDashboard}) => {
  const {authorisedUser,setAuthorisedUser} = useContext(tokenContext)
  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
    <Navbar className="shadow border rounded position-fixed w-100 z-1">
        <Container>
          <Navbar.Brand >
            <Link className='text-decoration-none fw-bolder' to={'/'}><i className="fa-brands fa-docker px-2"></i>Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard && 
            <button onClick={logout} className='btn btn-link'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
          }
        </Container>
      </Navbar>
  )
}

export default Header