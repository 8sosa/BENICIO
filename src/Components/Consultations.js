import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Accordion } from 'react-bootstrap';

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
        <Form className='d-flex flex-column align-items-center' action="https://formspree.io/f/mpwawnwz"
          method="POST">
          <Accordion>
              <Row xs={1} md={2}>
                <Col> 
                  <Form.Control placeholder="Full Name?" aria-label="Fullname" aria-describedby="Fullname" name='Fullname' className="accordionItemBox"/>
                </Col>
                <Col>
                  <Form.Control placeholder="Phone Number and Email Address" aria-label="Phone Number" aria-describedby="Phone Number" name='Phone_Number' className="accordionItemBox"/>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="0">
                        <Accordion.Header>Does your water have taste, odour or colour?</Accordion.Header>
                        <Accordion.Body>
                          <div className='d-flex'>
                            <Form.Check
                              type="radio"
                              label="Yes"
                              name="Does your water have taste odour or colour?"
                              id="waterTasteOdourColourYes"
                              className='m-2'
                            />
                            <Form.Check
                              type="radio"
                              label="No"
                              name="Does your water have taste odour or colour?"
                              id="waterTasteOdourColourNo"
                              className='m-2'
                            />
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="1">
                        <Accordion.Header>Are you currently consuming the water?</Accordion.Header>
                        <Accordion.Body>
                          <div className='d-flex'>
                            <Form.Check
                              type="radio"
                              label="Yes"
                              name="Are you currently consuming the water?"
                              id="currentlyConsumingYes"
                              className='m-2'
                            />
                            <Form.Check
                              type="radio"
                              label="No"
                              name="Are you currently consuming the water?"
                              id="currentlyConsumingNo"
                              className='m-2'
                            />
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="2">
                        <Accordion.Header>What is your water source?</Accordion.Header>
                        <Accordion.Body>
                          <Form.Control as="textarea" name='What is your water source?'/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="3">
                        <Accordion.Header>Have you run any tests before on your water supply? If yes, Share the results</Accordion.Header>
                        <Accordion.Body>
                          <Form.Control as="textarea" name='Have you run any tests before on your water supply? If yes, Share the results'/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="4">
                        <Accordion.Header>Do you have a treatment system?</Accordion.Header>
                        <Accordion.Body>
                          <Form.Control as="textarea" name='Do you have a treatment system?'/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="5">
                        <Accordion.Header>Do you have any technician who currently maintains your water treatment, if yes why did you discontinue with the company?</Accordion.Header>
                        <Accordion.Body>
                          <div className='d-flex'>
                            <Form.Check
                              type="radio"
                              label="Yes"
                              name="Do you have any technician who currently maintains your water treatment, if yes why did you discontinue with the company?"
                              id="technicianMaintenanceYes"
                              className='m-2'
                            />
                            <Form.Check
                              type="radio"
                              label="No"
                              name="Do you have any technician who currently maintains your water treatment, if yes why did you discontinue with the company?"
                              id="technicianMaintenanceNo"
                              className='m-2'
                            />
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="6">
                        <Accordion.Header>Are you currently using a surface pump?</Accordion.Header>
                        <Accordion.Body>
                          <div className='d-flex'>
                          <Form.Check
                            type="radio"
                            label="Yes"
                            name="Are you currently using a surface pump?"
                            id="surfacePumpYes"
                            className='m-2'
                          />
                          <Form.Check
                            type="radio"
                            label="No"
                            name="Are you currently using a surface pump?"
                            id="surfacePumpNo"
                            className='m-2'
                          />
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
                <Col>
                    <Accordion.Item className="accordionItemBox" eventKey="7">
                        <Accordion.Header>Are you sharing your water source?</Accordion.Header>
                        <Accordion.Body>
                          <div className='d-flex'>
                          <Form.Check
                            type="radio"
                            label="Yes"
                            name="Are you sharing your water source?"
                            id="sharingWaterSourceYes"
                            className='m-2'
                          />
                          <Form.Check
                            type="radio"
                            label="No"
                            name="Are you sharing your water source?"
                            id="sharingWaterSourceNo"
                            className='m-2'
                          />
                          </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
              </Row>
          </Accordion>
          <button className='subBtn' type="submit">Submit</button>
        </Form>
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
