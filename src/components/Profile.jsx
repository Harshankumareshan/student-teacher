import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Profile() {
  return <>
  <div>
    <h1>Profile</h1>
    <h3>the sub Component are:</h3>
   
    
    <ul>
      <Link to='details'><button className='btn btn-primary'>Profile Details</button></Link>
    
    <br/>
    <br/>
    <Link to='reset-password'><button className='btn btn-primary'>Reset Password</button></Link>
   
    </ul>
    <Outlet/>
    </div>
    
    </>
}

export default Profile