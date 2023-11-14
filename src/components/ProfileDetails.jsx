import React from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function ProfileDetails() {
  return (
    <div className='monthly-wrapper'> 
    <h1>Monthly task</h1>
    <br/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Project Name</th>
          <th>Day of submission</th>
          <th>Pratical Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>wind mill with electric switch</td>
          <td>31/07/2023</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Water flow indicator</td>
          <td>04/08/2023</td>
          <td>50</td>
        </tr>
        <tr>
          <td>3</td>
          <td>build house using cardboard</td>
          <td>24/09/2023</td>
          <td>100</td>
        </tr>
      </tbody>
    </Table>
    </div>
   
  )
}

export default ProfileDetails