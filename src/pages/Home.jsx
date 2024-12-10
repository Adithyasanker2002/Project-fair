import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import landingImg from '../assets/landing.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectAPI } from '../services/allAPI'

const Home = () => {
  const navigate = useNavigate()
  const [homeProjects,setHomeProjects]=useState([])
const [isLogin,setisLogin]=useState(false)
console.log(homeProjects);


  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
  setisLogin(true)
    }else{
setisLogin(false)
    }
  },[])
  const getHomeProjects = async ()=>{
    try{
      const result = await homeProjectAPI()
      console.log(result);
      if(result.status==200){
        setHomeProjects(result.data)
      }
      
    }catch(err){
      console.log(err);
      
    }
  }
  const handleNavigateProject = ()=>{
    // user logined?
    if(sessionStorage.getItem("token")){
      // authorized user then redirect
      navigate('/projects')
    }
    else{
      // not an authorized user then alert please login
      alert("Please login to get full access to our project")
    }
  }

  return (
    <>
      <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 style={{fontSize:'80px'}}> <i className="fa-brands fa-docker"></i> Project Fair</h1>
              <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects.
                where User can add manage their projects. As well as access all projects available in our website... what are you waiting for !!!
              </p>
             {
              isLogin ?
              <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECT</Link>
              : 
              <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
             }
            </div>
            <div className='col-lg-6'><img className='img-fluid' src="" alt="" /></div>
          </div>
        </div>

      </div>
      {/* Explore  */}
      <div className='my-5 text-center'>
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className='d-flex'>
           {
            homeProjects?.map(project=>(
              <div className='me-5'>
              <ProjectCard displayData={project}/>
            </div>
            ))
           }
          </div>
        </marquee>
        <button onClick={handleNavigateProject} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>
      {/* testimonial */}
      <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
        <h1 className=''>Our Testimonila</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        
      </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-female.png" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        
      </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-6.png" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            
          </div>
          <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        
      </Card.Body>
        </Card>
        </div>
      </div>
    </>
  )
}

export default Home