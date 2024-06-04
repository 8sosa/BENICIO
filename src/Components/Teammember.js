import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, Col, Container, Row} from 'react-bootstrap';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import Pic61 from './Images/pic61.png'


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
        <Breadcrumb>
            <Breadcrumb.Item href="/teams">
                <p className='breadcrumbText'>Team</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item active><p className='breadcrumbText'>Samuel Sunday Akpadiaha</p></Breadcrumb.Item>
        </Breadcrumb>
        <section className='projectContent'>
            <Row xs={2}>
                <Col xs={5}><img src={Pic61} alt='location' className='projectContentImg'/></Col>
                <Col xs={6} className='d-flex flex-column justify-content-center align-items-flex-start'>
                    <h1 className='teamtext4'>Samuel Akpadiaha is the Operation/Project Coordinator of Benicio Innovations Limited, with more than 10 years in solving water related problems nationwide.</h1>
                    <p className='teamtext5'>With more than 10 years of experience in solving water related problems nationwide.</p>
                    <hr className='styledLine1' xs={9}></hr>
                    <h1 className='teamtext7'>Phone : <span className='teamtext6'>+234 803 291 2543</span></h1>
                    <h1 className='teamtext7'>Email : <span className='teamtext6'>sakpadiaha@beniciogroups.com</span></h1>
                    <div className='d-flex flex-row mb-5'>
                        <div className='m-2'><IoLogoInstagram className='blueish3'/></div>
                        <div className='m-2'><IoLogoFacebook className='blueish3'/></div>
                        <div className='m-2'><FaLinkedinIn className='blueish3'/></div>
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
      </Container>
    </>
  )
}