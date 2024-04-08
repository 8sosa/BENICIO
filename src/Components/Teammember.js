import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";


import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic40 from './Images/pic40.png'


export default function Teammember () {
  return (
    <>
      <Container className='page'>
        <section className='projectTitleBlock'>
            <div>
                <li className='topListBox'><span className='homeHeroText1'>Our Team</span></li>
                <h1 className='projectTitle'>Samuel Sunday Akpadiaha</h1>
            </div>
        </section>
        <section className='projectContent'>
            <Row xs={2}>
                <Col xs={5}><img src={Pic40} alt='location' className='projectContentImg'/></Col>
                <Col xs={6} className='d-flex flex-column justify-content-center align-items-flex-start'>
                    <h1 className='teamtext4'>Samuel is the CEO of Benicio Innovations Limited, with more than 10 years in solving water related problems nationwide.</h1>
                    <p className='teamtext5'>With more than 10 years of experience in solving water related problems nationwide.</p>
                    <hr className='styledLine1' xs={9}></hr>
                    <h1 className='teamtext7'>Client : <span className='teamtext6'>123456708</span></h1>
                    <h1 className='teamtext7'>Location : <span className='teamtext6'>@samuel.com</span></h1>
                    <h1 className='teamtext7'>Project Date : <span className='teamtext6'>www.samuel.com</span></h1>
                    <div className='d-flex flex-row mb-5'>
                        <div className='m-2'><IoLogoInstagram className='blueish3'/></div>
                        <div className='m-2'><IoLogoFacebook className='blueish3'/></div>
                        <div className='m-2'><IoLogoTwitter className='blueish3'/></div>
                    </div>
                    <a href='/contact-us'><button className='contactBtn'>Contact Me</button></a>
                </Col>
            </Row>
            <div className='mt-5'>
                <h1 className='blackHeader'>Qualification & Experience</h1>
                <p className='teamtext5'>B.Sc Physics/Electronics from Cross River University of Technology in Calabar, Nigeria. Additionally, he holds an MBA from OAU and several diplomas in Health Safety and Environment, Project Management, and Human Resources. Samuel is not only a strategic thinker but also an exemplary leader with an empathetic heart dedicated to mitigating the impact of poor water quality and water scarcity in the country.</p>
                <p className='teamtext5'>Under Samuel's visionary leadership, Benicio Innovations underwent a revolution in water treatment approaches, leaving an indelible mark on the nation. Driven by a passion for innovation, he continues to shape the landscape of water treatment, ensuring a sustainable and impactful future for the nation and Africa at large.</p>
            </div>
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