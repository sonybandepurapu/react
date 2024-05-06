import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Images/01.jpg';
import Image2 from '../Images/02.webp';
import Image3 from '../Images/04.jpg';
import Image4 from '../Images/1.webp';
import Image5 from '../Images/2.avif';
import Image6 from '../Images/3.jpg';
import Image65 from '../Images/65.jpg';
import Image66 from '../Images/66.jpg';
import Image67 from '../Images/67.jpg';
import Image69 from '../Images/69.jpg';
import Image22 from '../Images/0022-removebg-preview (1).png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import './home.css';




function CarouselFadeExample() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
       <img src={Image1}  width={1250} height={600} />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} width={1250} height={600}/>
        <Carousel.Caption>
          <h3>EAGEL FIGHT</h3>
          <p> VISIT THE WEBSITE FOR MORE ONLINE AND OFFLINE GAMES</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3}  width={1250} height={600}/>

        <Carousel.Caption>
          <h3>BATTLE WAR GAME THRONE</h3>
          <p>
           VISIT THE WEBSITE FOR MORE ONLINE AND OFFLINE GAMES
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/> <hr/>

    <div>
          <Container>
             <Row>
              <Col style={{padding:70}}>
              <center>
              <h4>🅾🅽🅻🅸🅽🅴 🅶🅰🅼🅸🅽🅶 🆆🅴🅱🆂🅸🆃🅴 </h4><br/><br/>
              <Link to='footer'> <button> Review</button></Link><br/><br/>
              <h7>It evolves as a process from a reviewer playing through a game, talking with the senior staff about the experience, going through several edits and revisions to make sure the argument is air-tight, and looking at how it stacks up against other similar games, and more.</h7>
              </center>
              </Col>
              <Col>
              <img src={Image22} width="400" height="400"/>
              
              </Col>
             </Row>
             <hr/>
          </Container>
        </div>

    <div style={{padding:30}}>
    
    <CardGroup>
      <Card style={{padding:30}}>
        <Card.Img variant="top" src={Image4} className='hover'/>
        <Card.Body>
          <marquee>
          <Card.Title>Delux Online game</Card.Title>
          </marquee>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">view more</small>
        </Card.Footer>
      </Card>
      <Card style={{padding:30}}>
        <Card.Img variant="top" src={Image5} className='hover'/>
        <Card.Body>
          <marquee>
          <Card.Title>Brain Dum Online Game</Card.Title>
          </marquee>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">view more</small>
        </Card.Footer>
      </Card>
      <Card style={{padding:30}}>
        <Card.Img variant="top" src={Image6} className='hover' height="180"/>
        <Card.Body>
          <marquee>
          <Card.Title>Subway surfers</Card.Title>
          </marquee>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">view more</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
      
     <div> 

        <Container>
        <Row>
          <Col >
            <img src={Image66} width="200" height="300"/>
          </Col>

          <Col >
            <img src={Image69} width="200" height="300"/>
          </Col>
          <Col >
            <img src={Image67} width="200" height="300"/>
          </Col>
          <Col >
            <img src={Image65} width="200" height="300"/>
          </Col>
        </Row>
        </Container><br/>
      
      </div>  

     
</>

    
);
}

export default CarouselFadeExample;