import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Profile() {
  return <>
  <div className='profile-wrapper'>
    <h1>Assingment</h1>
    <br/>
    <br/>
    <ul>
    <h3>Click here to view monthly task</h3>
    <br/>
      <Link to='details'><button className='btn btn-primary'>Task Details</button></Link>
    <br/>
    <br/>
    <h3>Click here to view weekly task</h3>
    <br/>
    <Link to='reset-password'><button className='btn btn-primary'>Task Details</button></Link>
   
    </ul>
    <Outlet/>
    </div>
    
    </>
}

export default Profile