import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

function Contact() {
    return (
<>

        <div className="form">
        <Container>
          <Row >
            <Col style={{paddingTop:150}}>
              <center>
            <h4>Get in touch with us </h4><br/>
            <p> Want to get ion touch with us ? We  would loved to hear <br/>from you. Here is how you can reach us.</p>
        
            <h6> +91 858485849990</h6>
      
            <h7> Visit all global numbers</h7>
            </center>
          </Col>
            <Col style={{marginRight:90,marginLeft:50,paddingBottom:50,marginBottom:50,marginTop:50,backgroundColor:'powderblue',borderRadius:20,height:400}}>
            <center>
              <h3 style={{paddingTop:50}}> Login Or Sign Up</h3><br/>
           <input type="text" className='login' placeholder="Enter ur name"/><br/><br/>
           <input type="text" className='login' placeholder="Enter email"/><br/><br/>
           <input type="text" className='login' placeholder="Enter Subject"/><br/><br/>
           <input type="text" className='login' placeholder="Enter a text"/><br/><br/>
           <button className="sub"> Submit</button>
           </center>
           </Col>
          </Row>
        
        </Container>
        <hr/>


        
      </div>
  </>
    )
    
  }
  
  export default Contact