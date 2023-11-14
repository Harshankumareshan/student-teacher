import React from 'react'
import Card from './Card'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Navigate, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Dashboard({ users, setUsers }) {
   
    let [data, setData] = useState([{
        title: "Earnings (Monthly)",
        value: "$5000",
        color: "primary",
        icon: "fa-calendar",
        isProgress: false
    },
    {
        title: "Earnings (Annual)",
        value: "$60000",
        color: "success",
        icon: "fa-dollar-sign",
        isProgress: false
    },
    {
        title: "Task",
        value: "75",
        color: "info",
        icon: "fa-clipboard-list",
        isProgress: true
    },
    {
        title: "Pending Request",
        value: "18",
        color: "warning",
        icon: "fa-comments",
        isProgress: false
    }
    ])
    let navigate = useNavigate()
    
    return <>
   
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    
               

                     <div className="stud-details">
                    <h1>Student Details</h1>
                    </div> 

                    <div className="row">
                        {
                            data.map((e, i) => {
                                return <Card key={i}
                                    input={e}
                                />
                            })
                        }
                    </div>
                    <div className='container-fluid'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>no</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Batch</th>
                                    <th>DOB</th>
                                    <th>Teacher</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((e, i) => {
                                        return <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.batch}</td>
                                            <td>{e.dob}</td>
                                            <td>{e.teacher}</td>
                                            <td>
                                                <Button variant='primary'onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                                                &nbsp; &nbsp;
                                                <Button variant='danger' onClick={() => {
                                                    let newArray = [...users]
                                                    newArray.splice(i, 1)
                                                    setUsers(newArray)
                                                }}>Delete</Button>
                                            </td>

                                        </tr>
                                    })
                                }

                            </tbody>
                        </Table>
                    </div>

                </div>

            </div>
        </div>
    </>
}

export default Dashboard