import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoIosArrowRoundForward } from "react-icons/io";

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'
import Pic58 from './Images/pic58.png'

import teamData from './Team.json'

export default function Teams () {

  const team = teamData;
  const headId = 1;
  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>Our Team</span></li>
            <h1 className='heroHeader'>Meet Our Experts</h1>
          </div>
          <div className='teamsHeroImg'>
          </div>
        </section>
        <section className='projectsContent'>
            <a href='/teams/1'>
                <Card className='teams'>
                    <Card.Body className='d-flex flex-column align-items-center'>
                        <Card.Img variant="top" src={Pic58} />
                        <Card.Title className='teamTitle'>Samuel Sunday Akpadiaha</Card.Title>
                        <Card.Text className='teamText'>Head of sales and operations Nigeria</Card.Text>
                    </Card.Body>
                </Card>
            </a>
            <Row className='projectsContentCard mt-5'>
              {
                team.map((teamMember) => (
                  teamMember.id !== headId ? (
                    <Col>
                      <Link to={`/teams/${teamMember.id}`} key={teamMember.id}>
                        <Card className='teams'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Img variant="top" src={require('./Images/' + teamMember.image)} />
                                <Card.Title className='teamTitle'>{teamMember.name}</Card.Title>
                                <Card.Text className='teamText'>{teamMember.role}</Card.Text>
                            </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  ) : null
                ))
              }
            </Row>
        </section>
        <section className='projectsContent' id='Career'>
        <span className='homeHeroText2'>Come join us</span>
        <h1 className='blackHeader mb-4'>Career Openings</h1>
        <span className='jobOpenText mb-4'>We’re always looking for creative, talented self-starters to join the Benicio Group family. Check out our open roles below and fill out an application.</span>
        <a href='#Career' className='widthm100'>
          <Row className='jobOpen'>
            <Col className='jobOpen1 m-1'><p className='jobOpenText1'>Sales Representative</p></Col>
            <Col className='jobOpen2 d-flex flex-column m-1'>
              <span className='jobOpenText2'>Experience</span>
              <span className='jobOpenText1'>3 Years</span>
            </Col>
            <Col className='jobOpen3 d-flex flex-column m-1'>
              <span className='jobOpenText2'>Deadline</span>
              <span className='jobOpenText1'>2024-07-08</span>
            </Col>
            <Col className='jobOpen4 d-flex flex-row justify-content-end'><IoIosArrowRoundForward className='d4'/></Col>
          </Row>
        </a>
        <a href='#Career' className='widthm100'>
          <Row className='jobOpen'>
            <Col className='jobOpen1 m-1'><p className='jobOpenText1'>State Sales Coordinator</p></Col>
            <Col className='jobOpen2 d-flex flex-column m-3'>
              <span className='jobOpenText2'>Experience</span>
              <span className='jobOpenText1'>1 Years</span>
            </Col>
            <Col className='jobOpen3 d-flex flex-column m-3'>
              <span className='jobOpenText2'>Deadline</span>
              <span className='jobOpenText1'>2024-09-08</span>
            </Col>
            <Col className='jobOpen4 d-flex flex-row justify-content-end'><IoIosArrowRoundForward className='d4'/></Col>
          </Row>
        </a>
        <a href='#Career' className='widthm100'>
          <Row className='jobOpen'>
            <Col className='jobOpen1 m-1'><p className='jobOpenText1'>Zonal Sales Coordinator</p></Col>
            <Col className='jobOpen2 d-flex flex-column m-3'>
              <span className='jobOpenText2'>Experience</span>
              <span className='jobOpenText1'>2 Years</span>
            </Col>
            <Col className='jobOpen3 d-flex flex-column m-3'>
              <span className='jobOpenText2'>Deadline</span>
              <span className='jobOpenText1'>2024-08-08</span>
            </Col>
            <Col className='jobOpen4 d-flex flex-row justify-content-end'><IoIosArrowRoundForward className='d4'/></Col>
          </Row>
        </a>
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
        <iframe title='Our Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0736947615487!2d3.2640759757779065!3d6.637770421823248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90a490748365%3A0x18e2c30fe20599bc!2s32%20Abike%20Ewegbemi%20St%2C%20Oke%20Odo%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715103483413!5m2!1sen!2sng" width="100%" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}
