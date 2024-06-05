import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoCheckmark } from "react-icons/io5";

import Pic2 from './Images/pic2.png'
import Pic3 from './Images/pic3.png'
import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'


export default function About () {
  return (
    <>
      <Container className='page'>
        <Row className='aboutHero'>
          <Col className='aboutHeroContent' xs={5}>
            <li className='topListBox'><span className='homeHeroText1'>About Us</span></li>
            <h1 className='heroHeader'>Know About Us</h1>
            <p>Benicio's journey is fuelled by a passion for solving the national water crisis.</p>
          </Col>
          <Col className='aboutHeroImg' xs={7}>
          </Col>
        </Row>
        <section className='aboutContent'>
          <Row className='mrsCol2'>
            <Col md={6}>
              <div className='aboutContBox'>
                <div className='ghost'><p className='textgrey'>Welcome to Benicio Group</p></div>
                <h1 className='blackHeader'>Our Story</h1>
                <p className='greyPgraph'>
                  Benicio's journey is fuelled by a passion for solving the national water crisis. The cases of several deaths and hospitalization of citizens due to diarrhoea and several other water-borne diseases is our drive. Our commitment is evident through partnerships with esteemed institutions like  National Association of Proprietors of Private schools (NAPPS) 
                  <br />
                  <br />
                  The inspiration for Benicio's inception occurred in 2017, when a tragic outbreak of waterborne diseases in claimed the lives of students and left hundreds hospitalized in a prominent school in the country. This pivotal moment underscored the urgent need for comprehensive water solutions that transcend geographical boundaries and societal sectors.
                  <br />
                  <br />
                  Our approach integrates standard technology, rigorous scientific analysis, and unwavering dedication to sustainability. From community water projects to upscale real estate developments, from hospitality ventures to individual households, our solutions transcend boundaries and redefine standards.
                  <br />
                  <br />
                  We actively seek partnerships with global entities, governmental bodies, and NGOs to amplify our impact and drive systemic change. Together, we aspire to create a future where clean, sustainable water is not a luxury but a universal right.
                </p>
                <div>
                  <Row md={2} className='mt-4 mb-3'>
                    <Col className='mb-4'>
                      <div className='d-flex flex-row align-items-center'>
                        <div className='socialIcon' ><IoCheckmark className='white'/></div>
                        <p className='checkText'>We provide 24/7 service</p>
                      </div>
                    </Col>
                    <Col className='mb-4'>
                      <div className='d-flex flex-row align-items-center'>
                        <div className='socialIcon' ><IoCheckmark className='white'/></div>
                        <p className='checkText'>We provide 24/7 service</p>
                      </div>
                    </Col>
                    <Col className='mb-4'>
                      <div className='d-flex flex-row align-items-center'>
                        <div className='socialIcon' ><IoCheckmark className='white'/></div>
                        <p className='checkText'>We provide 24/7 service</p>
                      </div>
                    </Col>
                    <Col className='mb-4'>
                      <div className='d-flex flex-row align-items-center'>
                        <div className='socialIcon' ><IoCheckmark className='white'/></div>
                        <p className='checkText'>We provide 24/7 service</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='aboutBtnBox'>
                  <a href='/contact'><button className='contactUsBtn'>Contact Us</button></a>
                  <div>
                    <p className='aboutTextdark'>For Emergency Fixing or Appointment</p>
                    <p className='aboutTextPurp'>08032912543</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className='mrCol'>
              <div className='phantom'><p className='textgrey'>Welcome to Benicio Group</p></div>
              <div className='aboutPicBox'>
                <img src={Pic2} alt='person' className='aboutPicBoxpic'/>
              </div>
            </Col>
          </Row>
        </section>
        <section className='aboutContent'>
          <div className='margin50'>
            <h1 className='blackHeader'>Our Mission</h1>
            <p className='missText'>To provide water solutions by pioneering the installation of advance treatment plants to transform lives through sustainable water solutions</p>
            <img src={Pic3} alt='logo' className='aboutpagelogopic'/>
          </div>
          <div>
            <div>
              <h1 className='blackHeader'>Our Goals</h1>
              <Row md={'auto'}>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Pioneering Water Solutions Provider</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Community Empowerment</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Global Reach</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Awareness & Partnership</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Sustainability</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Meet & Exceed WHO Standard</p>
                  </div>
                </Col>
              </Row>
            </div>
            <p className='missText1'>Safe water .... healthy living</p>
            <div>
              <h1 className='blackHeader'>Our Core Values</h1>
              <Row md={'auto'} className='mt-5'>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Integrity</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Innovations</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Excellence</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Empowerment</p>
                  </div>
                </Col>
                <Col>
                  <div className='greyBg'>
                    <div className='checkIcon' ><IoCheckmark className='blueish'/></div>
                    <p className='greyBgText'>Sustainability</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
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
        <iframe title='Our Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0736947615487!2d3.2640759757779065!3d6.637770421823248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90a490748365%3A0x18e2c30fe20599bc!2s32%20Abike%20Ewegbemi%20St%2C%20Oke%20Odo%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715103483413!5m2!1sen!2sng" width="100%" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}
