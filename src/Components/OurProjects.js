import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import testimonialData from './Testimonials.json'

export default function OurProjects () {

  const currentCards = testimonialData;

  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>The Case Studies</span></li>
            <h1 className='heroHeader'>Our Latest Projects</h1>
          </div>
          <div className='testiHeroImg'>
          </div>
        </section>
        <section className='projectsContent'>
        <Row md={4}>
            {
              currentCards.map((testimonial) => (
                <Col>
                  <a href='/testimonials'>
                    <Card className='projects'>
                      <Card.Body className='cardBody'>
                        <Card.Img variant="top" src={require('./Images/' + testimonial.image)} className='productCardImg'/>
                        <Card.Title className='projectsTitle'>{testimonial.title}</Card.Title>
                        <Card.Text className='projectsText'>{testimonial.location}</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))
            }
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
            <li className='topListBoxpurp'><span className='greenCardText'>Contact Us</span></li>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service? Contact Us</h1>
            <a href='/contact-us'><button className='callBtn'>Contact Us</button></a>
          </div>
        </section>
      </Container>
    </>
  )
}
