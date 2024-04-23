import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


import Logo from './Images/logo1.png'

export default function Footer () {
  return (
    <>
      <div className='footer'>
        <div className='footerTop'>
          <Row md={2}>
            <Col md={4}>
              <Row className='d-flex flex-row align-items-center'>
                <Col md={'auto'}><img src={Logo} alt='logo' href="/"/></Col>
                <Col md={'auto'}><h1 className='footerBrandName'>Benicio Groups</h1></Col>
              </Row>
              <p className='footerBrandSlogan'>Safe water .... healthy living</p>
              <div className='d-flex flex-row'>
                <div className='socialIcon' ><IoLogoInstagram className='white'/></div>
                <div className='socialIcon' ><IoLogoFacebook className='white'/></div>
                <div className='socialIcon' ><IoLogoTwitter className='white'/></div>
                <div className='socialIcon' ><FaLinkedinIn className='white'/></div>
              </div>
            </Col>
            <Col md={8}>
              <div className='footerCard'>
                <Row sm={3}>
                  <Col>
                    <ul className='footerList'>
                      <li className='footerListHeader'>Quick Links</li>
                      <li className='footerListItem' href="/About-Us">About Us</li>
                      <li className='footerListItem' href='/services'>Services</li>
                      <li className='footerListItem'>Consultations</li>
                      <li className='footerListItem' href='/testimonials'>Testimonials</li>
                      <li className='footerListItem' href='/teams'>Team</li>
                      <li className='footerListItem' href='/contact-us'>Contact Us</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className='footerList'>
                      <li className='footerListHeader'>Location</li>
                      <li className='footerListItemBold'>Lagos</li>
                      <li className='footerListItem'>32 Abike Ewegbemi St, Oke Odo, Lagos</li>
                      <li className='footerListItemBold'>Akwa Ibom</li>
                      <li className='footerListItem'>11 Grace Bill Road Eket, Akwa- Ibom State</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className='footerList'>
                      <li className='footerListHeader'>Contact Us</li>
                      <li className='footerListItem'>info.nigeria@beniciogroups.com 08032912543</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className='footerBottom'>Copyright © Benicio Groups</div>
      </div>
    </>
  )
}
