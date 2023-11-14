import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Task from "./components/Task";
import PendingRequest from "./components/PendingRequest";
import AddUser from "./components/AddUser";
import ResetPassword from "./components/ResetPassword";
import ProfileDetails from "./components/ProfileDetails";
import { useState } from "react";
import NavBar from "./components/NavBar";



function App() {
  let [users,setUsers]=useState([
    {
      name:"Anoop",
      email:"anoop@gmail.com",
      batch:"10 - A",
      dob:"2005-01-02",
      teacher:"Ravi"
    },
    {
      name:"Ajith",
      email:"ajith@gmail.com",
      batch:"10 - A",
      dob:"2006-08-06",
      teacher:"Raja"
    },
    {
      name:"Ganesh",
      email:"ganesh@gmail.com",
      batch:"11 - B",
      dob:"2001-12-12",
      teacher:"Ravi"
    },
    {
      name:"kowshik",
      email:"kowshik@gmail.com",
      batch:"11 - A",
      dob:"2001-09-09",
      teacher:"kumar"
    },
    {
      name:"prakesh",
      email:"prakesh@gmail.com",
      batch:"10 - B",
      dob:"2008-08-11",
      teacher:"Ravi"
    },
    {
      name:"kalai",
      email:"kalai@gmail.com",
      batch:"12 - A",
      dob:"2010-06-01",
      teacher:"Ravi"
    },
    {
      name:"mukesh",
      email:"mukesh@gmail.com",
      batch:"11 - A",
      dob:"2008-04-02",
      teacher:"Raja"
    },
    {
      name:"Ram",
      email:"Ram@gmail.com",
      batch:"10 - B",
      dob:"2005-01-19",
      teacher:"Raja"
    },
  ])
 return <>
 
 <NavBar/>
  <BrowserRouter>
      <div id="wrapper">
        
        <Sidebar />
        <Routes>
        
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />}/>
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers} />}/>
             <Route path="/profile" element={<Profile/>}> 
             {/* this is nested route */}
             <Route path='details' element={<ProfileDetails/>}/>
             <Route path='reset-password' element={<ResetPassword/>}/>

             </Route>
             <Route path="/pending-request" element={<PendingRequest/>}/>
            
             <Route path="*" element={<Navigate to='/dashboard'/>}/>

        </Routes>
      </div>
 </BrowserRouter>
 </>

}

export default App
