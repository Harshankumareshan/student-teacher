import React from 'react'
import { Link,useNavigate } from "react-router-dom";
function Sidebar() {
  let navigate = useNavigate()
  return <>
 
    <ul style={{marginTop:"20px",marginLeft:"10px"}} className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-"></i>
        </div>
        <div className="sidebar-brand-text mx-3">john'school</div>
      </div>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <Link to='/dashboard' style={{ textDecoration: 'none'}} >
        <li className="nav-item active">
          <div className="nav-link">
          
            <h5><i className="fa-solid fa-list" style={{fontSize:"15px",marginRight:"2%"}}></i>Student details</h5></div>
        </li>
      </Link>


      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        Manage
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <Link to='/Add-User' style={{ textDecoration: 'none'}}>
        <li className="nav-item">
          <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-user-plus"></i>
            <span>Add Student</span>
          </div>
        </li>
      </Link >
      <Link to='/profile' style={{ textDecoration: 'none'}}>
        <li className="nav-item">
          <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-regular fa-address-card"></i>
            <span>Task</span>
          </div>
        </li>
      </Link>
       {/* <!--THIS IS USING LINK--> */}
      <Link to='/pending-request'style={{ textDecoration: 'none'}}>
        <li className="nav-item">
       
          <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"  
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-school"></i>
            <span>About School</span>
          </div>
          </li>
          </Link>
          {/* <!--THIS IS USING USE NAVIGATE BY USING USENAVIGATE,IT WONTS SHOW THE UNDERLINE  --> */}
        <Link to='/Task'style={{ textDecoration: 'none'}}>
          <li className="nav-item" onClick={()=>navigate('/task')}>
        <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"  
          aria-expanded="true" aria-controls="collapseTwo">
          <i className="fa-solid fa-list-check"></i>
          <span>View</span>
        </div>


      </li>
      </Link> 
      
      
    </ul>
   
   
  </>
}

export default Sidebar