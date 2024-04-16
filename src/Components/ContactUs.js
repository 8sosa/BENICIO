import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

import { IoCallOutline, IoMailOutline, IoLocationOutline, IoCreateOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic12 from './Images/pic12.jpg'
import Pic46 from './Images/pic46.png'


export default function ContactUs () {
  return (
    <>
        <Container className='page'>
            <section className='aboutHero'>
            <div className='aboutHeroContent'>
                <li>Contact Us</li>
                <h1 className='heroHeader'>Feel Free to Reach Us</h1>
            </div>
            <div className='contactHeroImg'>
            </div>
            </section>
            <section className='projectContent'>
                <Row>
                    <Col><img src={Pic12} alt='location' className='projectContentImg'/></Col>
                    <Col>
                        <p className='contactTopText'>Let’s Talk</p>
                        <p className='contactTopText1'>Get in touch with us</p>
                        <p className='contactTopText2'>Reach out to us to get your water problems solved.</p>
                        <div className='mt-5'>
                            <div className='d-flex flex-row align-items-center'>
                                <div xs={'auto'} className='p-3'>
                                    <div className='grey-Bg'>
                                        <IoCallOutline className='purple'/>
                                    </div>
                                </div>
                                <div xs={'auto'} >
                                    <p className='contactTopText2'>Whatsapp</p>
                                    <p className='contactTopText3'>08032912543</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div xs={'auto'} className='p-3'>
                                    <div className='grey-Bg'>
                                        <IoMailOutline className='purple'/>
                                    </div>
                                </div>
                                <div xs={'auto'}>
                                    <p className='contactTopText2'>Email</p>
                                    <p className='contactTopText3'>Info@Beniciogroups.com</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div xs={'auto'} className='p-3'>
                                    <div className='grey-Bg'>
                                        <IoLocationOutline className='purple'/>
                                    </div>
                                </div>
                                <div xs={'auto'}>
                                    <p className='contactTopText2'>Visit anytime</p>
                                    <p className='contactTopText3'>32 Abike Ewegbemi St, Oke Odo, Lagos</p>
                                    <p className='contactTopText3'>11 Grace Bill Road Eket, Akwa- Ibom State</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <p className='textgrey'><IoCreateOutline />Testimonial</p>
                        <h1 className='blackHeader'>Customers Says</h1>
                        <div className='transCard'>
                            <div className='transCardFooter'>
                                <div className='d-flex flex-row align-items-center'>
                                <div className='proPicBox'>
                                    <img src={Pic46} alt='profile pic' className='propic'/>
                                </div>
                                <div xs={'auto'}>
                                    <p className='contactTopText3'>Mrs. Esther Oladimeji</p>
                                    <p className='contactTopText2'>Yaba, Lagos</p>
                                </div>
                                </div>
                                <div className='p-3'>
                                <div className='grey-Bg'>
                                    <RiDoubleQuotesL className='purple'/>
                                </div>
                                </div>
                            </div>
                            <p className='transCardText'>Their services were excellent, my water had issues with coloring and smell...Benicio group solved my water problems instantly. Currently, we use the water to cook in my household. Thank you Benicio!!</p>
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
                <button href='/teams' className='contactUsBtn'>Contact Us</button>
            </div>
            </section>
        </Container>
    </>
  )
}
