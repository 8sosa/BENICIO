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
                <Col xs={2} md={4} className='fitter'><img src={Logo} alt='logo' href="/"/></Col>
                <Col xs={10} md={8} className='fitter'><h1 className='footerBrandName'>Benicio Groups</h1></Col>
              </Row>
              <p className='footerBrandSlogan'>Safe water .... healthy living</p>
              <div className='d-flex flex-row'>
                <a href='https://www.instagram.com/benicioinnovations?igsh=MXZhZDhjeTJodWw5aw==' target="_blank" rel="noopener noreferrer"><div className='socialIcon' ><IoLogoInstagram className='white'/></div></a>
                <a href='https://m.facebook.com/people/Benicio-Innovations-Limited/61557395136407/' target="_blank" rel="noopener noreferrer"><div className='socialIcon' ><IoLogoFacebook className='white'/></div></a>
                <a href='https://twitter.com/BIL2DEWORLD' target="_blank" rel="noopener noreferrer"><div className='socialIcon' ><IoLogoTwitter className='white'/></div></a>
                <a href='https://www.linkedin.com/company/benicio-innovations-limited/' target="_blank" rel="noopener noreferrer"><div className='socialIcon' ><FaLinkedinIn className='white'/></div></a>
              </div>
            </Col>
            <Col md={8}>
              <div className='footerCard'>
                <Row sm={3} className='width100'>
                  <Col>
                    <ul className='footerList'>
                      <li className='footerListHeader'>Quick Links</li>
                      <a className="footerLink" href="/About-Us"><li className='footerListItem'>About Us</li></a>
                      <a className="footerLink" href='/services'><li className='footerListItem'>Services</li></a>
                      <a className="footerLink"  href='/Consultations'><li className='footerListItem'>Consulation</li></a>
                      <a className="footerLink" href="/projects" ><li className='footerListItem'>Projects</li></a>
                      <a className="footerLink" href='/teams'><li className='footerListItem'>Team</li></a>
                      <a className="footerLink"  href='/contact-us'><li className='footerListItem'>Contact Us</li></a>
                    </ul>
                  </Col>
                  <Col>
                    <ul className='footerList'>
                      <li className='footerListHeader'>Location</li>
                      <li className='footerListItemBold'>Lagos</li>
                      <li className='footerListItem'>32 Abike Ewegbemi St, Oke Odo, Lagos</li>
                      <li className='footerListItemBold pt-3'>Akwa Ibom</li>
                      <li className='footerListItem'>11 Grace Bill Road Eket, Akwa- Ibom State</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className='footerList'>
                      <li className='footerListHeader'>Contact Us</li>
                      <li className='footerListItem'>info.nigeria@beniciogroups.com</li>
                      <li className='footerListItem'>08032912543</li>
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
