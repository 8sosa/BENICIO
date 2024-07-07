import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row, Col, Accordion } from 'react-bootstrap';

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'

export default function OurProjects () {


  return (
    <>
      <Container className='page'>
        <section className='aboutHero' id='top'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>Water diagnosis</span></li>
            <h1 className='heroHeader'>Let’s understand the issues you’re facing</h1>
          </div>
          <div className='ConsultationsHeroImg'>
          </div>
        </section>
        <section className='projectsContent'>
        <li className='topListBox'><span className='homeHeroText2'>Water diagnosis</span></li>
        <h1 className='blackHeader mb-5'>Please fill the form below</h1>
        <Accordion>
            <Row xs={1} md={2}>
              <Col>
                <Form.Control placeholder="Fullname?" aria-label="Fullname" aria-describedby="basic-addon1" className="accordionItemBox"/>
              </Col>
              <Col>
                <Form.Control placeholder="Phone Number..." aria-label="Phone Number" aria-describedby="basic-addon1" className="accordionItemBox"/>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="0">
                      <Accordion.Header>Does your water have taste, odour or colour?</Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex'>
                          <Button variant="outline-secondary" className='d-flex m-2'>Yes</Button>
                          <Button variant="outline-secondary" className='d-flex m-2'>No</Button>
                        </div>
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="1">
                      <Accordion.Header>Are you currently consuming the water?</Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex'>
                          <Button variant="outline-secondary" className='d-flex m-2'>Yes</Button>
                          <Button variant="outline-secondary" className='d-flex m-2'>No</Button>
                        </div>
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="2">
                      <Accordion.Header>What is your water source?</Accordion.Header>
                      <Accordion.Body>
                        <Form.Control as="textarea" />
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="3">
                      <Accordion.Header>Have you run any tests before on your water supply? If yes, Share the results</Accordion.Header>
                      <Accordion.Body>
                        <Form.Control as="textarea" />
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="4">
                      <Accordion.Header>Do you have a treatment system?</Accordion.Header>
                      <Accordion.Body>
                        <Form.Control as="textarea" />
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="5">
                      <Accordion.Header>Do you have any technician who currently maintains your water treatment, if yes why did you discontinue with the company?</Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex'>
                          <Button variant="outline-secondary" className='d-flex m-2'>Yes</Button>
                          <Button variant="outline-secondary" className='d-flex m-2'>No</Button>
                        </div>
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="6">
                      <Accordion.Header>Are you currently using a surface pump?</Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex'>
                          <Button variant="outline-secondary" className='d-flex m-2'>Yes</Button>
                          <Button variant="outline-secondary" className='d-flex m-2'>No</Button>
                        </div>
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item className="accordionItemBox" eventKey="7">
                      <Accordion.Header>Are you sharing your water source?</Accordion.Header>
                      <Accordion.Body>
                        <div className='d-flex'>
                          <Button variant="outline-secondary" className='d-flex m-2'>Yes</Button>
                          <Button variant="outline-secondary" className='d-flex m-2'>No</Button>
                        </div>
                      </Accordion.Body>
                  </Accordion.Item>
              </Col>
            </Row>
        </Accordion>
        <a href='#top'><div className='subBtn'>Submit</div></a>
        </section>
        <section className='clientsSection'>
          <h1 className='whiteHeader'>Our Clients</h1>
         <div className='d-flex flex-row'>
            <img src={Pic4} alt='client' className='clientPic'/>
            <img src={Pic7} alt='client' className='clientPic'/>
            <img src={Pic6} alt='client' className='clientPic'/>
            <img src={Pic5} alt='client' className='clientPic'/>
          </div>
        </section>
        <div className='ghost'>
        <section className='d-flex flex-column align-items-center'>
          <div className='greenCard'>
            <li className='topListBoxpurp'><span className='greenCardText'>Contact Us</span></li>
            <h1 className='greenCardText1'>Need An Experienced <span className='white'>Professional</span> Service?</h1>
            <a href='/contact-us'><button className='greenCardBtn'>Contact Us</button></a>
          </div>
        </section>
        </div>
      </Container>
    </>
  )
}
