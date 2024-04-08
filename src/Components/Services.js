import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

import { IoCallOutline, IoCreateOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiDoubleQuotesL, RiHomeGearLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiFactoryLight } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";


import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic13 from './Images/pic13.png'
import Pic20 from './Images/pic20.png'
import Pic21 from './Images/pic21.png'
import Pic22 from './Images/pic22.png'
import Pic23 from './Images/pic23.png'
import Pic24 from './Images/pic24.png'
import Pic25 from './Images/pic25.png'
import Pic26 from './Images/pic26.png'
import Pic27 from './Images/pic27.png'
import Pic28 from './Images/pic28.png'
import Pic29 from './Images/pic29.png'
import Pic30 from './Images/pic30.png'
import Pic31 from './Images/pic31.png'
import Pic32 from './Images/pic32.png'
import Pic33 from './Images/pic33.png'
import Pic34 from './Images/pic34.png'
import Pic35 from './Images/pic35.png'
import Pic36 from './Images/pic36.png'
import Pic37 from './Images/pic37.png'



export default function Services () {
  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>Our Services</span></li>
            <h1 className='heroHeader'>What We’re Offering</h1>
          </div>
          <div className='servicesHeroImg'>
          </div>
        </section>
        <section className='homeContent'>
          <h1 className='serviceHeaderText'>Professional Services</h1>
          <p className='serviceHeaderText1'>Our business thrives on the commitment to succeed by providing clients with service quality that not only meets their requirements but surpasses their expectations.</p>
          <div className='d-flex flex-row align-items-center'>
            <div className='tag0'>
              <HiOutlineBuildingOffice2 />
              <p className='checkText p-1'>Borehole Drilling & Maintenance</p>
            </div>
            <div className='tag01'>
              <RiHomeGearLine />
              <p className='checkText p-1'>Water Treatment Installations</p>
            </div>
            <div className='tag01'>
            <PiFactoryLight />
              <p className='checkText p-1'>Water Factories Setup</p>
            </div>
            <div className='tag01'>
              <PiFactoryLight />
              <p className='checkText p-1'>Community Water Project</p>
            </div>
          </div>
          <Row className='ytSection'>
            <Col>
              <p className='textgrey'>Based on Commercial</p>
              <h1 className='homeHeaderText1'>Borehole Drilling & Maintenance</h1>
              <p className='greyPgraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className='greyPgraph'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button href='/services' className='contactUsBtn'>Read More</button>
            </Col>
            <Col>
              <img src={Pic20} alt='water' className='aboutPicBox' />
            </Col>
          </Row>
        </section>
        <section className='homeContent1'>
          <p className='textgrey'><IoCreateOutline className='yellow'/>The Gallery</p>
          <h1 className='serviceHeaderText'>Check Our Products</h1>
          <Row md={3}>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic21} />
                  <Card.Title className='projectsTitle'>Mini-Water Treatment Plant</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic22} />
                  <Card.Title className='projectsTitle'>Domestic Reverse Osmosis</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic23} />
                  <Card.Title className='projectsTitle'>Industrial Water Treatment Plant</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic24} />
                  <Card.Title className='projectsTitle'>Industrial Reverse Osmosis</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic25} />
                  <Card.Title className='projectsTitle'>Extrepure Resin</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic26} />
                  <Card.Title className='projectsTitle'>MTM Iron Remover</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic27} />
                  <Card.Title className='projectsTitle'>Adolite</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic28} />
                  <Card.Title className='projectsTitle'>Iron and Manganese Reduction Media</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic29} />
                  <Card.Title className='projectsTitle'>A8029 Anthracite</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic30} />
                  <Card.Title className='projectsTitle'>Activated Carbon</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic31} />
                  <Card.Title className='projectsTitle'>Ion Exchange Resin</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic32} />
                  <Card.Title className='projectsTitle'>Aqua Prime</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic33} />
                  <Card.Title className='projectsTitle'>Mini reverse osmosis machines</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic34} />
                  <Card.Title className='projectsTitle'>Chlorine Feeder</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic35} />
                  <Card.Title className='projectsTitle'>Sachet Water sealing machines</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic36} />
                  <Card.Title className='projectsTitle'>Bottle water Sealing Machine</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='projects'>
                <Card.Body className='d-flex flex-column align-items-center'>
                  <Card.Img variant="top" src={Pic37} />
                  <Card.Title className='projectsTitle'>Water proof Printing machine</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className='projectContent'>
            <Row className='mt-5'>
                <Col>
                    <p className='textgrey'><IoCreateOutline />Testimonial</p>
                    <h1 className='blackHeader'>Customers Says</h1>
                    <div className='transCard'>
                        <div className='transCardFooter'>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='proPicBox'>
                                    <img src={Pic13} alt='profile pic' />
                                </div>
                                <div xs={'auto'}>
                                    <p className='contactTopText3'>Nancy luther</p>
                                    <p className='contactTopText2'>NewYork</p>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='grey-Bg'>
                                    <RiDoubleQuotesL className='purple'/>
                                </div>
                            </div>
                        </div>
                        <p className='transCardText'>Pellentesque vehicula eros neque, maximus mattis est sagittis facilisi.<span className='transCardText1'>”In sed pretium metus”</span>. Ppretium id urna sit amet tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in elementum tristique</p>
                        <div className='transCardFooter'>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='transCardFooterIcon1'><IoIosArrowBack /></div>
                                <div className='transCardFooterIcon2'><IoIosArrowForward /></div>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='transCardFooterIcon3'><FaPlay /></div>
                                <p className='transCardFooterText'>Customer review</p>
                            </div>
                        </div>
                    </div>
                    <div className='purpCard'>
                        <p className='textgrey'><IoCreateOutline className='yellow'/>Any Question</p>
                        <p className='purpCardText1'>99.9% Customer Satisfation Based</p>
                        <p className='purpCardText2'>If you have any questions or need help contacting us, please call</p>
                        <div className='d-flex flex-row align-items-center'>
                            <div className='purpCardIcon'><IoCallOutline /></div>
                            <p className='purpCardText3'>08032912543</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <p className='textgrey'><IoCreateOutline />Meet Us</p>
                    <h1 className='blackHeader'>Appointment Form</h1>
                    <Form className='contactForm'>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control className='contactFormField' type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control className='contactFormField' type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control className='contactFormField' type="tel" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control className='contactFormField' type="text" placeholder="Location" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Control className='contactFormField' as="textarea" rows={3} placeholder="What water problem are you facing?"/>
                        </Form.Group>
                        <button className='contactFormBtn'>Submit</button>
                    </Form>
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
            <button href='/contact-us' className='contactUsBtn'>Contact Us</button>
          </div>
        </section>
      </Container>
    </>
  )
}
