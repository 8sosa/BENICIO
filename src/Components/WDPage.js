import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';

import { SlArrowDown } from "react-icons/sl";

import Pic4 from './Images/pic4.png'
import Pic5 from './Images/pic5.png'
import Pic6 from './Images/pic6.png'
import Pic7 from './Images/pic7.png'


export default function WDPage () {
  return (
    <>
      <Container className='page'>
        <section className='aboutHero'>
          <div className='aboutHeroContent'>
            <li className='topListBox'><span className='homeHeroText1'>Water diagnosis</span></li>
            <h1 className='heroHeader'>Let’s understand the issues you’re facing</h1>
          </div>
          <div className='servHeroImg'>
          </div>
        </section>
        <section className='projectsContent'>
            <li className='topListBox'><span className='wdpText1'>Water diagnosis</span></li>
            <h1 className='serviceHeaderText'>Please fill the form below</h1>
            <Row md={2}>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Does your water have taste, odour or color?</p>
                        <SlArrowDown />
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Are you currently consuming the water?</p>
                        <SlArrowDown />
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>What is your water source?</p>
                        <SlArrowDown />
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Have you run any tests before on your water supply? If yes, Share the results</p>
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Do you have a treatment system?</p>
                        <SlArrowDown />
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Do you have any technician who currently maintains your water treatment, if yes why did you discontinue with the company?</p>
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Are you currently using a surface pump?</p>
                        <SlArrowDown />
                    </div>
                </Col>
                <Col>
                    <div className='wdpDropdown'>
                        <p className='wdpDropdowntext'>Are you sharing your water source?</p>
                        <SlArrowDown />
                    </div>
                </Col>
            </Row>
            <button className='subBtn'>Submit</button>
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
            <button href='/teams' className='contactUsBtn'>Contact Us</button>
          </div>
        </section>
      </Container>
    </>
  )
}
