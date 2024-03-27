import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic9 from './Images/pic9.png'


export default function OurProjects () {
  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li>The Case Studies</li>
            <h1 className='heroHeader'>Our Latest Projects</h1>
          </div>
          <div className='testiHeroImg'>
          </div>
        </section>
        <section className='projectsContent'>
            <Row md={3}>
                <Col>
                    <Card className='projects'>
                        <Card.Body className='d-flex flex-column align-items-center'>
                            <Card.Img variant="top" src={Pic9} />
                            <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                            <Card.Text className='projectsText'>House,  Office</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='projects'>
                        <Card.Body className='d-flex flex-column align-items-center'>
                            <Card.Img variant="top" src={Pic9} />
                            <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                            <Card.Text className='projectsText'>House,  Office</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='projects'>
                        <Card.Body className='d-flex flex-column align-items-center'>
                            <Card.Img variant="top" src={Pic9} />
                            <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                            <Card.Text className='projectsText'>House,  Office</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='projects'>
                        <Card.Body className='d-flex flex-column align-items-center'>
                            <Card.Img variant="top" src={Pic9} />
                            <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                            <Card.Text className='projectsText'>House,  Office</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='projects'>
                        <Card.Body className='d-flex flex-column align-items-center'>
                            <Card.Img variant="top" src={Pic9} />
                            <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                            <Card.Text className='projectsText'>House,  Office</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='projects'>
                        <Card.Body className='d-flex flex-column align-items-center'>
                            <Card.Img variant="top" src={Pic9} />
                            <Card.Title className='projectsTitle'>Water treatment project</Card.Title>
                            <Card.Text className='projectsText'>House,  Office</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
        <section className='clientsSection'>
          <h1 className='whiteHeader'>Our Clients</h1>
          <div className='d-flex flex-row'>
            <img src={Pic4} alt='client' className='clientPic'/>
            <img src={Pic5} alt='client' className='clientPic'/>
            <img src={Pic6} alt='client' className='clientPic'/>
            <img src={Pic7} alt='client' className='clientPic'/>
          </div>
        </section>
        <section className='d-flex flex-column align-items-center'>
          <div className='greenCard'>
            <p className='greenCardText'>Contact Us</p>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service? Contact Us</h1>
            <p className='greenCardText2'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled  a type specimen book. </p>
            <button href='/teams' className='contactUsBtn'>Contact Us</button>
          </div>
        </section>
      </Container>
    </>
  )
}
