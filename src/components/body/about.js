import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from '../Images/05.jpg';
import Img2 from '../Images/002.jpg';
import Img3 from '../Images/003.webp';
import Img4 from '../Images/0010.jpeg';
import Img54 from '../Images/0017.jpg';
import Img6 from '../Images/0018.avif';
import Img7 from '../Images/0019.avif';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Img9 from'../Images/009.webp';
import Img10 from '../Images/006.png';
import Img11 from '../Images/03.jpg';
import Img27 from  '../Images/0027-removebg-preview.png';
import Img50 from '../Images/50.jpg';
import Img51 from '../Images/51.jpg';
import Img53 from '../Images/53.jpg';
import {Link} from 'react-router-dom'; 
import Img55 from '../Images/55.jpg';
import Img56 from '../Images/56.jpg';
import Img57 from '../Images/57.jpg';
import Img58 from '../Images/58.jpg';
import Img60 from '../Images/60.png';
import { hover } from "@testing-library/user-event/dist/hover";




function About() {
    return (
      <> 
      
      <div style={{padding:20}}>
        <Container>
        <Row>
          <Col>
      <Card style={{ width:'17rem'}} className='hover'>
      <img src={Img1} height={190}/>
      <Card.Body>
      <center> <Card.Title>SUBWAY SURFING </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf"><Button>Play Now</Button></a></center>
      </Card.Body>
    </Card>
    </Col>

          <Col>
        <Card style={{ width:'17rem' }} className='hover'>
      <img src={Img2} height={190}/>
      <Card.Body>
      <center> <Card.Title>BARBIE DREAM HOUSE</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.budgestudios.googleplay.BarbieDreamhouse"><Button>Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>



        <Col>
        <Card style={{ width: '17rem',}} className='hover'>
      <img src={Img3} height={190}/>
      <Card.Body>
      <center> <Card.Title>CANDY CRUSH</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.king.candycrushsaga"><Button>Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>
        
    </Row>
    </Container>
      </div>
       
      <div style={{padding:30}}>
        <Container>
      <Row>
          <Col>
      <Card style={{ width:'18rem'}} className='hover'>
      <img src={Img9} height={190}/>
      <Card.Body>
      <center>  <Card.Title>LUDO </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.ludo.king"><Button>Play Now</Button></a></center>
      </Card.Body>
    </Card>
    </Col>

          <Col>
        <Card style={{ width:'18rem'}} className='hover'>
      <img src={Img10}/>
      <Card.Body>
      <center> <Card.Title> TEMPLE RUN</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href ="https://play.google.com/store/apps/details?id=com.imangi.templerun">  <Button>Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>



        <Col>
        <Card style={{ width: '18rem'}} className='hover'>
      <img src={Img11} height={190}/>
      <Card.Body>
      <center> <Card.Title>FORTNITE</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.fortnite.com/mobile/android"> <Button> Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>
    </Row>
    </Container>
      </div>


      <div style={{padding:30}}>
        <Container>
      <Row>
          <Col>
      <Card style={{ width:'18rem'}} className='hover'>
      <img src={Img50} height={190}/>
      <Card.Body>
      <center> <Card.Title>BUBBLE SHOOT </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=bubbleshooter.orig"><Button>Play Now</Button></a></center>
      </Card.Body>
    </Card>
    </Col>

          <Col>
        <Card style={{ width:'18rem' }} className='hover'>
      <img src={Img51} height={190}/>
      <Card.Body>
      <center> <Card.Title>Hills Of Steel</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href ="https://play.google.com/store/apps/details?id=com.superplusgames.hosandroid">  <Button>Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>



        <Col>
        <Card style={{ width: '18rem'}} className='hover'>
      <img src={Img53} height={190}/>
      <Card.Body>
      <center>  <Card.Title>FRUIT NINJA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.halfbrick.fruitninjafree"> <Button> Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>
    </Row>
    </Container>
      </div>



      <div style={{padding:30,}} >
        <Container>
      <Row>
          <Col>
      <Card style={{ width:'18rem'}} className='hover'>
      <img src={Img54} height={190}/>
      <Card.Body>
      <center> <Card.Title>CHESS GAME</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.chess"><Button>Play Now</Button></a></center>
      </Card.Body>
    </Card>
    </Col>

          <Col>
        <Card style={{ width:'18rem'}} className='hover'>
      <img src={Img55} height={190}/>
      <Card.Body>
      <center>  <Card.Title>SNAKES AND LADDERS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href ="https://play.google.com/store/apps/details?id=ir.Hadiware.Snake_Ladde">  <Button>Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>



        <Col>
        <Card style={{ width: '18rem'}} className='hover'>
      <img src={Img56} height={190}/>
      <Card.Body>
      <center> <Card.Title>CRICKET</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.nautilus.RealCricket3D"> <Button> Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>
    </Row>
    </Container>
      </div>




      <div style={{padding:30}} >
        <Container>
      <Row>
          <Col>
      <Card style={{ width:'18rem'}} className='hover'>
      <img src={Img57} height={190}/>
      <Card.Body>
      <center> <Card.Title>RAISE KINGDOM </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href="https://play.google.com/store/apps/details?id=com.rok.gp.vn"><Button>Play Now</Button></a></center>
      </Card.Body>
    </Card>
    </Col>

          <Col>
        <Card style={{ width:'18rem' }} className='hover'>
      <img src={Img58} height={190}/>
      <Card.Body>
      <center> <Card.Title>DAILY PUZZLE</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <a href ="https://play.google.com/store/apps/details?id=com.appynation.puzzlepage">  <Button>Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>



        <Col>
        <Card style={{ width: '18rem'}} className='hover'>
      <img src={Img60} height={190}/>
      <Card.Body>
      <center> <Card.Title>ANGRY BIRDS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://play.google.com/store/apps/details?id=com.rovio.baba"> <Button> Play Now</Button></a></center>
      </Card.Body>
      </Card>
        </Col>
    </Row>
    </Container>
      </div>

      <hr/>


     <div >
      <center>
      <h2> Top Played Games</h2>
      <br/>
      
      </center>
      <h6> A game is something that people often do for fun. It is different from work. Many sports are games, and there are many professional sports. In those cases, there is money to be made, because it is a type of entertainment. There are different kinds of games using many kinds of equipment. For example, in video games, people often use controllers or their keyboard to control what happens on a screen, such as a television screens and computers ones too. In card games, players use playing cards. There are also games that use your body, such as the Kinect. Most games need equipment, but not always. Children's street games often need no equipment.</h6> <br/>
     </div>

        <div>
          
        <Carousel fade>
        <Carousel.Item>
         <img src={Img4}  width="1300"  />
          <Carousel.Caption>
            
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img6}  width="1300"/>
          <Carousel.Caption>

            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img7}  width="1300"/>
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  

      




        </div>
        
          <div>
          <Container style={{padding:70}}>
             <Row>
              <Col>
              <center>
              <h4>🅾🅽🅻🅸🅽🅴 🅶🅰🅼🅸🅽🅶 🆆🅴🅱🆂🅸🆃🅴 </h4><br/><br/>
              <Link to ='footer'> <button> Review</button> </Link> <br/><br/>
              <h7>It evolves as a process from a reviewer playing through a game, talking with the senior staff about the experience, going through several edits and revisions to make sure the argument is air-tight, and looking at how it stacks up against other similar games, and more.</h7>
              </center>
              </Col>
              <Col style={{paddingLeft:110}}>
              <img src={Img27} width="400" height="300"/>
              </Col>
             </Row>
          </Container>
          </div>
       </>  
       
    );

    }

  
  export default About;