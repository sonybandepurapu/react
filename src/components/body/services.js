
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Img1 from '../Images/0010.jpeg';
import Img2 from '../Images/009.webp';
import Img3 from '../Images/002.jpg';
import Img4 from '../Images/003.webp';
import Img5 from '../Images/0028.jpg';
import Img6 from '../Images/0029.jpg';
import Img7 from '../Images/0030.jpg';
import Img8 from '../Images/0031.jpg';
import Img54 from '../Images/54.jpg';
import Img61 from '../Images/61.jpg';
import Img62 from '../Images/62.jpg';
import Img63 from '../Images/63.jpg';
import Img64 from '../Images/64.jpg';

import './services.css';




function Service() {
    return (
      <div >
      
      <div className='back image'>
        <center><br/><br/>
        <h1> ░O░░u░░r░ ░S░░e░░r░░v░░i░░c░░e░░s░</h1>
          <br/><br/>
          
        
        </center>

     
      
      </div>
      <div>
        
        <Container>
          <Row>
            <Col>
            <center>
              <hr/>
            <img src={Img1} width="300" height="300"/>
              <h4>🅛🅔🅐🅖🅤🅔 🅞🅕 🅛🅔🅖🅔🅝🅓🅢</h4>
              <br/>
              <label for="cars">Number of players: </label>
              <select>
                <option value="One">One </option>
                <option value="Two">Two </option>
                <option value="Three">Three </option>
                <option value="Four">Four</option>
                <option value="Five">Five</option>
              </select>
              <br/><br/>
             <a href ="https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift"> <Button>Sample Play</Button><br/><br/></a>
              </center>
              </Col>
          
              <Col>
            <center>

              <img src={Img2} width="300" height="300"/>
              <h4>🅛🅤🅓🅞</h4>
              <br/>
              <label for="cars">Number of players: </label>
              <select>
                <option value="One">One </option>
                <option value="Two">Two </option>
                <option value="Three">Three </option>
                <option value="Four">Four</option>
                <option value="Five">Five</option>
              </select>
              <br/>
              <br/>

             <a href="https://play.google.com/store/apps/details?id=com.ludo.king"> <Button> Sample Play</Button><br/></a>
              </center></Col>
              
              
          </Row>

        </Container><br/>
        
        <Container>
          <Row>
          <Col>
            <center>

              <img src={Img3} width="300" height="300"/>
              <h4>🅑🅐🅡🅑🅘🅔 🅦🅞🅡🅛🅓</h4>
              <br/>
              <a herf="https://play.google.com/store/apps/details?id=com.budgestudios.googleplay.BarbieDreamhouse"><Button>Sample Play</Button></a>
              </center></Col><br/>


              <Col>
            <center>

              <img src={Img4} width="300" height="300"/>
              <h4>🅒🅐🅝🅓🅨 🅒🅡🅤🅢🅗</h4>
              <a href="https://play.google.com/store/apps/details?id=com.king.candycrushsaga"><Button>Sample Play</Button></a>
              </center></Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
      
        <Row >
            <Col style={{padding:50}} className='hover'>
            <img src={Img62} width="200" height="300"/>
            </Col>
            <Col style={{padding:50}} className='hover'>
            <img src={Img63} width="200" height="300"/>
            </Col>
            <Col style={{padding:50}} className='hover'>
            <img src={Img64} width="200" height="300"/>
            </Col>
        </Row>

        </Container>
      </div>
      <div>
        <Container>
          <Row >
            <Col style={{padding:50}} className='hover'>
            <img src={Img5} width="190" height="300"/>
            </Col>
            <Col style={{padding:50}} className='hover'>
            <img src={Img6} width="190" height="300"/>
            </Col>

          <Col style={{padding:50}} className='hover'>
          
          <img src={Img7} width="190" height="300"/>
          </Col>
          <Col style={{padding:50}} className='hover'>
          <img src={Img8} width="190" height="300"/>
          </Col>
          <Col style={{padding:50}} className='hover'>
          <img src={Img54} width="190" height="300"/>
          </Col>
          <Col style={{padding:50}} className='hover'>
          <img src={Img61} width="190" height="300"/>
          </Col>
          </Row>
        </Container>
      </div>
      </div>
    )
    
  }
  
  export default Service