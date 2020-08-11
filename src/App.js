import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <div className = "sunBanner">
      <img src = {require('./Images/SunBanner2.gif')} alt = "sun"/>
      {/* <p>Image created using Blender</p> */}
      </div>
      <Card className = "box" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default App;
