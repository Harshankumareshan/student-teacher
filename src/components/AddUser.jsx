import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function AddUser({users,setUsers}) {

  let navigate = useNavigate()
  let params = useParams()

  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[batch,setBatch]=useState("")
  let[dob,setDob]=useState("")
  let[teacher,setTeacher]=useState("")

  let handleSubmit =()=>{
    let newUser = {name,email,batch,dob,teacher}
    let newArray =[...users]
    if(params.id!==undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else{
      newArray.push(newUser)
    }
    
    setUsers(newArray)
    navigate('/dashboard')
  }

  useEffect(()=>{
    if(params.id !== undefined)
    {
      setName(users[params.id].name)
      setEmail(users[params.id].email)
      setBatch(users[params.id].batch)
      setDob(users[params.id].dob)
      setTeacher(users[params.id].teacher)
      
    }
    
  },[params.id,users])
  return <>
  <div className='container-fluid'>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
       </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teacher</Form.Label>
        <Form.Control type="text" placeholder="Enter Teacher Name" value={teacher}  onChange={(e)=>setTeacher(e.target.value)}/>
      </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      
      
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
  </>
  
}

export default AddUser