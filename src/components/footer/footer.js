import React from 'react';

import './footer.css';

import Image7 from'../Images/007.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

     


function Footer () {
  return (
    <>
      <div className='footer'>
        <Container>
          <Row>
            <Col>
              <img src={Image7} width="200" height="200"/>
            </Col>

            <Col>
            <h4>Quick Links</h4><br/>
            <ul>
            <li >Work</li>
              <li>Services</li>
              <li>Games</li>
              <li >Tips & Tricks</li>
              </ul>
            </Col>

            <Col >
             
            <h4> Services</h4><br/>
            <li> Strategies  </li>
            <li>Sample play games </li>
            <li> Leader & Change</li>
            <li> Online Set up </li>
            <li >Sign Up </li>
            </Col>

            <Col >
              <ul>
              <h4>News Letter </h4><br/>
              <p>Subscribe News letter to get update</p>
              <br/>
              <input type='text' capturelassname='footersearch' placeholder='Enter your Email'/>
              </ul>
            </Col>
            </Row>
            </Container>
           
      </div>
         
        
    </>
  );
};

export default Footer;        
