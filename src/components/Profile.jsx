import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
// import upload from '../assets/upload.png'
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className='text-warning mt-2'>Profile</h3>
        <button onClick={()=>setOpen(!open)} className='btn text-warning'><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-collapse-text">
          {/* upload */}
          <label className='text-center'>
            <input type="file"  style={{display:'none'}}/>
            <img style={{cursor:'pointer'}} width={'200px'} height={'200px'} className='rounded-circle' src="" alt="" />
          </label>
          <div className="mb-2 w-100">
            <input type="text" placeholder='User GITHUB Link' className='form-control' />
            
          </div>
          <div className="mb-2 w-100">
          <input type="text" placeholder='User LINKEDIN Link' className='form-control' />
          </div>
          <div className='d-grid w-100'>
            <button className='btn btn-warning fw-bolder'>Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile