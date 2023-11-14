import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PendingRequest() {
  return <>
  <div className='card-wrapper'>
   <Card style={{ width: '40rem',height:"45rem",marginLeft:"5%",marginTop:"10%"}}>
      <Card.Img variant="top" src="https://schoolarchitects.in/wp-content/uploads/2022/07/MIS_FRONT_2.png" />
      <Card.Body>
        <Card.Title><h2>John's School</h2>since-1889</Card.Title>
        <Card.Text><h6>
        Our aim is to guide each individual towards a confident, resourceful, independent and happy adulthood well qualified in every way.Our dedicated teachers, for whom teaching is a passion, enthuse and challenge the students to full extent, this rewarding work combines both hard work and fun; they support students while gradually teaching them the skills to learn from each other and to study independently.
        </h6>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
    
    <div className='card-wrapper1'>
   <Card style={{ width: '40rem',height:"45rem",marginLeft:"10%",marginTop:"10%" }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/183783460/photo/school-building-and-playground.jpg?s=612x612&w=0&k=20&c=EMv-qGZZTeY5kH1d03FJys6nw-VRwdRWaw-mvyRmX_Q=" />
      <Card.Body>
        <Card.Title><h2>School Play ground Area</h2></Card.Title>
        <Card.Text>
         <h6>We also focus in students physical health, fitness,sports, Games and we have big play groud area for our students</h6>
         <ol>1.Basket ball</ol>
         <ol>2.Volley ball</ol>
         <ol>3.Foot ball</ol>
         <ol>4.athletics</ol>
         
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
    
    
    
    
  </>
}

export default PendingRequest